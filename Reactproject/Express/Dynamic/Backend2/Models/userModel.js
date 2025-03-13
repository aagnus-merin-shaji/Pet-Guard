const { default: mongoose }=require("mongoose");
const userSchema=new mongoose.Schema({
    name:
    {type:String,
     minLength:[3,"please enter morethan 3 character"],
     maxLength:[20],
     required:true,  
    },

    password:{
     type:String,
   
     required:true,  
    },
    email:{
        type:String,
        minLength:[3,"please enter morethan 3 character"],
        maxLength:[50],
        required:true,  
       },
    
},{
    timestamps:true
})

const User=mongoose.model("user",userSchema)
module.exports=User