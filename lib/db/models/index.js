const {UserSchema} = require("../methods");
const mongoose = require("mongoose");

const User = mongoose.model("Users",UserSchema);

module.exports = {User};