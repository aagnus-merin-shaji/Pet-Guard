const test=((req,res,next)=>{
    console.log("Middelware is running");
    next()
    
})
module.exports=test
