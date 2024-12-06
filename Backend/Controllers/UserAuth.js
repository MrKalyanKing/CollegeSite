import { UserModel } from "../models/Usermodel.js";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'




//login
const login= async (req,res)=>{
    const {email,password}=req.body
    const user = await UserModel.findOne({email})

    if(!user){
      return  res.json({success:false,message:'User Dosent exixst'})
    }

    const isMatch= await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.json({success:false,message:"Invalid Credential"})
    }
    const token = CreateToken(user._id);
    if (!token) {
        return res.status(500).json({ success: false, message: 'Token generation failed.' });
    }
    //console.log(user._id);
    
    res.json({ success: true, token });
}


const CreateToken=(id)=>{
 return jwt.sign({id},process.env.JWT,{expiresIn:'1h'})
}

 const register= async (req,res)=>{
 
    const {name,email,password}=req.body
    const exists= await UserModel.findOne({email})
   

    if(!validator.isEmail(email)){
        return res.json({success:false,message:'Enter an valid Email'})
    }

    const salt =await bcrypt.genSalt(5)
    const hashedpass=await bcrypt.hash(password,salt)

    const newuser= new UserModel({
        name:name,
        email:email,
        password:hashedpass,
    })

    const user=await newuser.save()
    console.log(user)
    
     if(!exists){
        return res.json({success:false,message:'Email already exists'})
    }

}

export{ login,register}