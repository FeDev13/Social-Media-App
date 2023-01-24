const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const UsersSchema = new Schema({
  fullname:{
    type: String,
    min: 3,
    max: 30,
    default: ""
},
username:{
    type: String,
   unique: true
},
email: {
    type: String,
    required: true,
    max: 50,
    unique: true
},
password:{
    type: String,
    require: true,
    min: 8
},
profilePicture:{
    type: String,
    default: "/default_avatar.jpg"
},
followers: {
    type: Array,
    default: []
},
following: {
    type: Array,
    default: []
},

bio:{
    type: String,
    max: 500,
    default: ""
}
},
{timestamps: true});
const User = mongoose.model("users", UsersSchema);



module.exports = {
  User,

};
