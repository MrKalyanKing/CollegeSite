import mongoose from "mongoose";
import { listings } from "../models/Usermodel.js";



export const addListing= async(req,res)=>{
    let image_file=`${req.file.filename}`
    const transformedFloors = req.body.floors.map(floor => ({
        floorNumber: floor.floorNumber,
        classes: floor.classes.map(className => ({ name: className })) // Transform class names
    }));

    const report= new listings({
        name:req.body.name,
        email:req.body.email,
        hallticket:req.body.hallticket,
        gender:req.body.gender,
        floors:transformedFloors,
        course:req.body.course,
        image:image_file,
    }) 
    try{
        await report.save();
        res.json({success:true,message:'New Submission is saved'})
    }catch(er){
        res.json({success:false,message:"New Submission is failed"})
    }
}