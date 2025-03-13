const express=require("express")
const router=require("./Routes")
const connectdb = require("./DataBase/connectdb")
const cookieParser = require("cookie-parser")
const cors= require ('cors');
const errorHandler = require("./Middelware/errorHandler")

require("dotenv").config()

const app=express()
connectdb()

const corsOptions={
    origin:"http://localhost:5173",
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(errorHandler)
cookieParser()
app.use(cookieParser())

app.use("/api/v1",router)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port${process.env.PORT}`)
});