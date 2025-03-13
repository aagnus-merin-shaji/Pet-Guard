const express=require("express")
const adminController = require("../Controllers/adminController")
const test = require("../Middelware/test")

const adminRouter=express.Router()

adminRouter.get("/:age",test,adminController.add)

module.exports=adminRouter