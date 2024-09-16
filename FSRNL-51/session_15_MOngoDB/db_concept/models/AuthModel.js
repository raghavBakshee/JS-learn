import mongoose from 'mongoose'
const AuthSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required : true,
        unique : false
    },
    lastName:{
        type: String,
        required : true,
        unique : false
    },
    email:{
        type: String,
        required : true,
        unique : false
    },
    password:{
        type: String,
        required : true,
        unique : false
    },
})

export const AuthModel = mongoose.model("auth", AuthSchema)