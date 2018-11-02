const express = require("express");
const router = express.Router();

const home = require("./home");

/**
 * HOME OR INDEX OR /
*/

router.get("/",home.get);



module.exports = router;