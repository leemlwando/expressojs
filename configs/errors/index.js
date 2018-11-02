const createError = require("http-errors");
const errors = {};
let error;

errors.catch404 = function(req,res,next){
    next(createError(404));
};

errors.handleErrors = function(err,req,res,next){
    if(!err)
        return next();
    // console.log(err)
    error = {};
    error.code = err.code || err.status || 500;
    error.message = err.message ? err.message : "some error occoured";
    error.reason = !err.reason ? null : "internal error";

    //create global errors
    res.locals.error = error;

    res.status(error.code);
    res.json({success:false,message:error.message,reason:error.reason});
    
}



module.exports = errors;