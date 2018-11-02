module.exports = (req,res,next)=>{
    console.log(req.isAuthenticated())
    res.json({success:true});
}