const {parseClientHome} = require('./client');

module.exports = {
    admin:{

    },
    client:{
        home:{
            get:(req,res,next)=>parseClientHome(req,res,next)
        }
    }
}