const  express=require("express")
const adminRouter = require("./adminRouter")
const userRouter = require("./userRouter")
const authorRouter = require("./authorRouter")
const router=express()

router.use("/admin",adminRouter)
router.use("/author",authorRouter)
router.use("/user",userRouter)
module.exports=router