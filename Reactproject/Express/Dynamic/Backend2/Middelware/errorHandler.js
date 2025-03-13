const { stack } = require("../Routes")

const errorHandler=((error,req,res,next)=>{
    res.status(error.status||500).json({
        message:error.message,
        stack:error.stack,
        status:error.status||500
    })
    next()
})
module.exports=errorHandler