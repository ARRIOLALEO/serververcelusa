const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        required:false,
        default:0,
    },
    image:{
        type:String,
        required:false,
    },
    dateOfCreation:{
        type:Date,
        required:true,
        default: Date.now,
    }
})

module.exports = mongoose.model("Produc",productSchema)












