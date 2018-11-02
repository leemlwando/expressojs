const express = require("express");
const router = express.Router();
const home = require("./home");
const dashboard = require("./dashboard");
const passport = require("passport");
const configs = require("../configs/passport");

/**
 *  / OR HOME OR INDEX
*/


router.get("/",home.get);

/**
 *  AUTHENTICATION @{login}
*/


/**
 *  AUTHENTICATION @{register}
*/




/**
 * DASHBOARD
*/
    //@{client-home}
    router.get("/dashboard",configs.isAuthenticated,dashboard.client.home.get);

module.exports = router;