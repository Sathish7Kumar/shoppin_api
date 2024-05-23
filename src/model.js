const  mongoose  = require("mongoose")

// creating Schema
const shoppingSchema = new mongoose.Schema({
    title : {type:String, required : true},
    image : {type:String, required : true},
    price : {type:Number, required : true},
    desc : {type:String, required : true},
    brand : {type:String, required : true},
})

// creating Model

const shoppingModel = mongoose.model("shopping",shoppingSchema)

module.exports =  shoppingModel

