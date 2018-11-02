const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Define User Schema
const UserSchema = new Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String,required:true}
});

module.exports = {UserSchema};