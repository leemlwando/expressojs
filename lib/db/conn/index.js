const mongoose = require("mongoose");
if(process.env.NODE_ENV.toLowerCase()==="development")
    mongoose.connect(process.env.MONGOOSE_URI_DEV,{useNewUrlParser:true});
if(process.env.NODE_ENV.toLowerCase()==="production")
    mongoose.connect(process.env.MONGOOSE_URI_DEV,{useNewUrlParser:true});
const db = mongoose.connection;

//check any errors on database startup
db.once("error",(err)=>{
    console.log(err);
    /**
     * @{TODO} WRITE ERROR TO LOG
    */
    process.exit(1); //kill app
});

db.on("open",()=>console.log(`APP DATABASE STARTED ON PORT 27017`));


module.exports = db;