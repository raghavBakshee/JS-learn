import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
    pname:{
        type: String,
        required : true,
        unique : true
    },
    category:{
        type: String,
        required : true,
    },
    price:{
        type: Number,
        required : true,
    },
    availableItems:{
        type: Number,
        required : true,
    },
    features:{
        type: String,
        required : true,
    },
    imagePath:{
        type: String,
        required : true,
    },
})

export const ProductModel = mongoose.model("product", ProductSchema)