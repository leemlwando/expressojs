//require envirminet variables
require("dotenv").config();

//check NODE ENVIROMENT
if(process.env.NODE_ENV !==undefined && (process.env.NODE_ENV ==="development" || process.env.NODE_ENV ==="production")){
      // server.listen(port,()=>console.log(`APP STARTED IN ${process.env.NODE_ENV} ON PORT ${port}`));
      console.log(`APP CONFIG RUNNING IN ${process.env.NODE_ENV.toUpperCase()} ENVIROMENT`);
  }else{
      console.log(`please provide a valid node enviroment e.g export NODE_ENV=development`);
      process.exit(1);
  };

//app depedencies
const express = require("express"),
      bodyParser = require("body-parser"),
      session = require("express-session"),
      path = require("path"),
      configs = require("./configs"),
      {db} = require("./lib").DB,
      router = require('./routes'),
      apiRouter = require("./api");
      logger = require("morgan");

//instantiate express app
const app = express();


/**
 *      CREATE MIDDLEWARE
 */

 //set view engine and views directory
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//log http requests
app.use(logger(configs.logger()));
//parse json and urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set up sessions
app.use(session(configs.session.configs));

//set up passport
app.use(configs.passport.initialize());
app.use(configs.passport.passportSession());
  //set up passport strategies
configs.passport.localStrategy();
configs.passport.serializeUser();
configs.passport.deserializeUser();

//set up routes
app.use("/",router);

//set up api endpoints
app.use("/api/v1",apiRouter);

//catch errors
app.use(configs.errors.catch404); //catch 404 errors
app.use(configs.errors.handleErrors);

module.exports = app;