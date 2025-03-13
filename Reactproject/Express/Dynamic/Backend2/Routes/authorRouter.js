const express=require("express")
const authorController = require("../Controllers/authorController")
const authorRouter=express.Router()

authorRouter.post("/create",authorController.create)
authorRouter.post("/find",authorController.find)
authorRouter.post("/update",authorController.update)
module.exports=authorRouter