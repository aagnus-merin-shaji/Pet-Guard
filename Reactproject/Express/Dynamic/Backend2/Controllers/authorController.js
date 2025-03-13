const Author = require("../Models/authorModel")

const authorController={
    create:async(req,res)=>{
        const {name,email,address,age}=req.body
        
        if(!name|!email||!address||!age){
            res.status(404).send("Incomplte Data")
        }
        const authorCreated = await Author.create({
            name,
            email,
            address,
            age
        })
        if(!authorCreated){
            res.status(404).send("author not created")
        }
        res.status(202).send(authorCreated)
    },


    find:async(req,res)=>{
        const {age}=req.body
        if(!age){
        return res.status(404).send("incomplete findings")
        }
        const authorFind = await Author.find({$or:[{age:{$gt:30}},{age:{$lt:25}}]})
        if(!authorFind){
        return res.status(404).send("age not find")
        }
        res.status(202).send(authorFind)
    },


    update:async(req,res)=>{
        const {name}= req.body
        if(!name){
        return res.status(404).send("name not found")
        }
        const authorUpdated = await Author.findOneAndUpdate({name},{name:"annu"},{
            runValidators:true,
            new:true
        })
        console.log(authorUpdated);
        

        if(!authorUpdated){
        return res.status(404).send("name not updated")
        }
        res.status(202).send(authorUpdated)
    }

}
module.exports=authorController
