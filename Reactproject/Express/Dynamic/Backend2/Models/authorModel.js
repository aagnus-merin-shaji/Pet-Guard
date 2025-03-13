const { default: mongoose } = require("mongoose");

const authorschema=new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,"less than 3"],
        maxLength:[20,"more than 20"],
        requried:true
    },
    book:{
        type:String,
        minLength:[10,"less than 10"],
        maxLength:[20,"more than 20"],
        requried:true
    },
    email:{
        type:String,
        requried:true,
        trim:true,
        unique:true,
    },
    address:{
        type:String,
        requried:true,
    },
    age:{
        type:Number,
        requried:true,  
    }
},{
    timestamps:true
})
const Author=mongoose.model("author",authorschema)
module.exports=Author
