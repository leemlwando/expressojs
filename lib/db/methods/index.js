const {UserSchema} = require('../schema');
const bcrypt = require("bcrypt");


UserSchema.pre("save",function(done){
    let self = this;
    let password = self.password;
    let salt = 10;

    bcrypt.hash(password,salt,function(err,hash){
        if(err){return done(err)};
        self.password = hash;
        done();
    })
});

UserSchema.passwordValid = function(password,cb){
    let self = this;
    let hash = self.password;
    if(typeof(password) !== "string"){
        return cb("please provide a valid password",false);
    };

    bcrypt.compare(password,hash,function(err,isMatch){
        if(err){return cb(err,false)};
        return cb(null,isMatch);
    })
}






module.exports = {UserSchema};
