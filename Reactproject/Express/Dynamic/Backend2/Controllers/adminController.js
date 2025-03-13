const adminController={
    add:(req,res)=>{
        const {age}=req.params
        res.send(`hai ${age}`)
    }
}
module.exports=adminController