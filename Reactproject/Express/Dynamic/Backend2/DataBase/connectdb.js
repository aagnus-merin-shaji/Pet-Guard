const { default: mongoose } = require("mongoose");

async function  connectdb()
{
     await mongoose.connect("mongodb+srv://agnusshaji16:6oF1txadP6VnPKAp@cluster0.jfzhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     console.log("print the db");
     
}
module.exports=connectdb