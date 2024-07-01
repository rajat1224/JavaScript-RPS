const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true
    },
    userName:{
        type: String,
        trim: true,
        required: true
    },
    password:{
        require:true,
        type:String
    },

},{ timestamps: true, versionKey: false });

const User=mongoose.model("Users",userSchema);
module.exports= User;