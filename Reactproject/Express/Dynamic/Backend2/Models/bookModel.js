const { default: mongoose } = require("mongoose");

const bookschema=new mongoose.Schema({
    title:{
    type:String,
    requried:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author',
    }
})
module.exports=bookModel