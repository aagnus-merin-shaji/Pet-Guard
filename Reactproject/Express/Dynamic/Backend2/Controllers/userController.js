const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
require('dotenv').config();

const userController = {
    reg: asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Data incomplete" });
        }

       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            throw new Error("Password hashing failed");
        }

        
        const userCreated = await User.create({
            email,
            name,
            password: hashedPassword
        });

        if (!userCreated) {
            throw new Error("User creation failed");
        }

        
        const payload = {
            id: userCreated._id,
            email: userCreated.email,
            name: userCreated.name
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "27h"
        });

        
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            maxAge: 3 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({ user: userCreated, token });
    }),
    login:asyncHandler(async(req,res)=>{
        const {email,password} =req.body
        if(!email || !password){
            throw new Error("Data in complete")
        }
        const userFound = await User.findOne({email})
        if(!userFound){
            throw new Error("user didn't exist")
        }
        const comparedPassword = await bcrypt.compare(password,userFound.password)
        if(!comparedPassword){
            throw new Error("password doesn't match")
        }
        const payload = {
            id: userFound._id,
            email: userFound.email,
            name: userFound.name
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "27h"
        });

        
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            maxAge: 3 * 24 * 60 * 60 * 1000
        });
        res.status(201).json({token})
    }),
    logout:asyncHandler(async(req,res)=>{
        res.status(201).send("user logout sucessfully")
    })
};

module.exports = userController;
