import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartdata:{
        type:String,
        Object:{}
    }
},{minimize:false})

export const UserModel=mongoose.model.user|| mongoose.model('user',UserSchema)



const allowedFloors = [1, 2, 3, 4];
const allowedClasses = [
    "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
    "Class 58", "Class 63", "Class 64", "Class 65", "Class 81","Class 78","Class 68","Class 69",
    "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
    "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E"
]; 

 const classSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
    unique:true,
    enum:allowedClasses
   }
 })

 const floornumberSchema=new mongoose.Schema({
    floornumber:{
        type:Number,
        required:true,
        unique:true,
        enum:allowedFloors
    },
    classes:[classSchema]
 })
  
const listingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hallticket:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    floors:[floornumberSchema],
    course:{
        type:String,
        enum:['BTECH']
    },
    discription:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
})

 export const listings=mongoose.model('report',listingSchema)