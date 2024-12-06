import mongoose from "mongoose";
const allowedFloors = [1,2,3,4];
const allowedClasses = [
    "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
    "Class 58", "Class 63", "Class 64", "Class 65", "Class 81","Class 78","Class 68","Class 69",
    "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
    "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E"
]; 


const arrayLimit = (val) => val.length <= 5; 

const floorSchema = new mongoose.Schema({
  floorNumber: {
    type: Number,
    enum: allowedFloors,
  },
  classes: {
    type: [String],
    enum: allowedClasses,
    validate: [arrayLimit, 'Exceeds the limit of classes per floor'],
  },
});

const reportSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  hallticket: {
    type:String,
    required:true,
    min:10,
    max:10
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required:true,
  },
  course: {
    type: String,
    enum: ["BTECH"],
    required:true,
  },
  description: {
    type:String,
    required:true,
  },
  floors: [floorSchema],
  image:{
   type:String,
   required:true,
  }
});

// Optional index (non-unique)
//reportSchema.index({ "floors.floorNumber": 1 }, { unique: false });

export const listings = mongoose.model("report", reportSchema);
