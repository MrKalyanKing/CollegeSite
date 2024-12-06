import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import { adminPannel } from "../models/adminModel.js";
import jwt from 'jsonwebtoken'

//admin login
const createToken=(id)=>{
   return jwt.sign({id},process.env.JWT)
}

const adminLogin=async (req,res)=>{
    const {user,password}=req.body
    const User= await adminPannel.findOne({user})
    if(!User){
        res.json({success:false,message:'User not exists'})
        alert("user not exists")
    }
    const isMatch= await bcrypt.compare(password,User.password)
    if(!isMatch){
        return res.json({success:false,message:"Invalid Credential"})
    }
    const token=createToken(User._id)
    if (!token) {
        return res.status(500).json({ success: false, message: 'Token generation failed.' });
    }
    res.json({ success: true, token });
}



const registerAdmin= async(req,res)=>{
    const {user,password}=req.body;
    
    const exists= await adminPannel.find({user})
    if(!exists){
        return res.json({success:false,message:'user already exists'})
    }
    const salt= await bcrypt.genSalt(5)
    const hashpass=await bcrypt.hash(password,salt)
     
    const newUser=new adminPannel({
        user:user,
        password:hashpass
    })
    try{
        const User= await newUser.save();
        //console.log(User);
        
        return res.json({success:true,message:"user saved succesfully"})
    }catch(err){
        //console.log(err)
        return res.json({success:false,message:"user not saved"})

    }
}

export{registerAdmin,adminLogin}