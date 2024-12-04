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



const allowedFloors = [1,2,3,4];
const allowedClasses = [
    "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
    "Class 58", "Class 63", "Class 64", "Class 65", "Class 81","Class 78","Class 68","Class 69",
    "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
    "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E"
]; 

const reportSchema = new mongoose.Schema({
    name: String,
    email: String,
    hallticket: String,
    gender: {
      type: String,
      enum: ["male", "female", "other"], // Enum for gender
    },
    course: {
      type: String,
      enum: ["BTECH"], // Enum for course (you can expand this if needed)
    },
    description: String,
    floor: {
      type: String,
      enum: allowedFloors, // Enum for floors
    },
    class: {
      type: String,
      enum: allowedClasses, // Enum for classes
    },
    floors: [
      {
        floorNumber: {
          type: Number,
          enum: allowedFloors, // Enum for floors
        },
        classes: {
          type: [String],
          enum: allowedClasses, // Enum for classes
        },
      },
    ],
    image: String, // Path of the uploaded image
  });
  
  reportSchema.index({ "floors.floorNumber": 1 }, { unique: false });
 export const listings=mongoose.model('report',reportSchema)