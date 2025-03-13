const express=require("express")



const userController = require("../Controllers/userController")
const isAuth = require("../Middelware/isAuth")

const userRouter=express.Router()

userRouter.post("/reg",isAuth,userController.reg)
userRouter.post("/login",isAuth,userController.login)
userRouter.post("/logout",isAuth,userController.logout)

module.exports=userRouter