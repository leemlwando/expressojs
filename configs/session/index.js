configs = {
    production:{
        name:process.env.SESSION_COOKIE_NAME,
        secret:process.env.SESSION_SECRET,
        saveUninitialized:false,
        resave:false,
        cookie:{maxAge:1000*60*24*7,secure:false}
    },
    development:{
        name:process.env.SESSION_COOKIE_NAME_DEV,
        secret:process.env.SESSION_SECRET_DEV,
        saveUninitialized:false,
        resave:false,
        cookie:{maxAge:1000*60*10,secure:false}
    }
}

const session = {};

if(process.env.NODE_ENV){
    if(process.env.NODE_ENV.toLowerCase()==="development"){
        session.configs = configs.development
    }else if(process.env.NODE_ENV.toLowerCase()==="production"){
        session.configs = configs.production
    }else{
        console.log(`Please provivide a nodejs enviroment e.g export NODE_ENV=development`)
        process.exit(1);
    }
}


module.exports = session;
