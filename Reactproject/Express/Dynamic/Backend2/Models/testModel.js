const { default: mongoose } = require("mongoose");

const testschema =new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,"less than 3"],
        maxLength:[20,"more than 20"],
        required:true
    },
    email:{
        type:String,

    }
}
)