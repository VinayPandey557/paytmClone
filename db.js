const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://vinaypandey46158:pandey557@mern-blog.vceuh.mongodb.net/")


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength:6
    },
    firstName: String,
    lastName: String
});




const User = mongoose.model("User", UserSchema);


module.exports= {
    User
}