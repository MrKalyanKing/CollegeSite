import mongoose from "mongoose";
import { listings } from "../models/Usermodel.js";

// Define allowed floors and classes
const allowedFloors = [1, 2, 3, 4];
const allowedClasses = [
    "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
    "Class 58", "Class 63", "Class 64", "Class 65", "Class 81", "Class 78", "Class 68", "Class 69",
    "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
    "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E"
];

export const addListing = async (req, res) => {
    let image_file = `${req.file.filename}`;
    const { name, email, hallticket, gender, course, description, floors } = req.body;

    // Parse floors from JSON if needed and handle errors
    let parsedFloors = [];
    try {
        parsedFloors = JSON.parse(floors);  // Make sure this is a valid JSON array
    } catch (error) {
        return res.json({ success: false, message: "Invalid floors data format" });
    }

    // Ensure floors is an array
    if (!Array.isArray(parsedFloors)) {
        return res.json({ success: false, message: "Floors should be an array" });
    }

    // Validate the floors data
    if (parsedFloors && parsedFloors.length > 0) {
        parsedFloors.forEach(floor => {
            if (!allowedFloors.includes(floor.floorNumber)) {
                return res.json({ success: false, message: `Invalid floor number: ${floor.floorNumber}` });
            }
            if (!floor.classes.every(c => allowedClasses.includes(c))) {
                return res.json({ success: false, message: `Invalid class in floor: ${floor.classes}` });
            }
        });
    } else {
        return res.json({ success: false, message: "Floors are required" });
    }

    // Create the report if validation passes
    const report = new listings({
        name,
        email,
        hallticket,
        gender,
        course,
        description,
        floors: parsedFloors,
        image: image_file
    });

    report.save()
        .then(savedReport => res.json({ success: true, report: savedReport }))
        .catch(error => {
            console.error(error);
            res.json({ success: false, message: "Error saving report" });
        });
};


// show all listing



export const listingshow = async (req, res) => {
  try {
    const { floor, classroom } = req.body;

    // Validation based on allowedFloors and allowedClasses
    const allowedFloors = [1, 2, 3, 4];
    const allowedClasses = [
      "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
      "Class 58", "Class 63", "Class 64", "Class 65", "Class 81", "Class 78", "Class 68", "Class 69",
      "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
      "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E",
    ];

    if (!allowedFloors.includes(Number(floor)) || !allowedClasses.includes(classroom)) {
      return res.status(400).json({ success: false, message: "Invalid floor or classroom" });
    }

    const filter = {
      ...(floor && { floor }),
      ...(classroom && { classroom }),
    };

    const data = await listings.find(filter);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ success: false, message: "Error fetching listings", error });
  }
};
