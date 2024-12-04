import { listings } from "../models/ReportModel.js";
// config.js
export const allowedFloors = [1, 2, 3, 4];
export const allowedClasses = [
  "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
  "Class 58", "Class 63", "Class 64", "Class 65", "Class 81", "Class 78", "Class 68", "Class 69",
  "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
  "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E",
];





// Add Listing
// export const addListing = async (req, res) => {
//   const { name, email, hallticket, gender, course, description, floors } = req.body;
//   let image_file = req.file ? `${req.file.filename}` : null;
//   let parsedFloors = [];

//   try {
//     // Parse floors data to ensure it is a valid JSON
//     parsedFloors = JSON.parse(floors);
//   } catch (error) {
//     return res.status(400).json({ success: false, message: "Invalid floors data format" });
//   }

//   if (!Array.isArray(parsedFloors) || parsedFloors.length === 0) {
//     return res.status(400).json({ success: false, message: "Floors should be a non-empty array" });
//   }

//   const floorNumbers = new Set();
//   for (const floor of parsedFloors) {
//     if (!floor.floorNumber || !allowedFloors.includes(floor.floorNumber)) {
//       return res.status(400).json({ success: false, message: `Invalid floor number: ${floor.floorNumber}` });
//     }
//     if (floorNumbers.has(floor.floorNumber)) {
//       return res.status(400).json({ success: false, message: `Duplicate floor number in request: ${floor.floorNumber}` });
//     }
//     floorNumbers.add(floor.floorNumber);
//     if (!floor.classes || !floor.classes.every(c => allowedClasses.includes(c))) {
//       return res.status(400).json({ success: false, message: `Invalid classes for floor ${floor.floorNumber}` });
//     }
//   }

//   // Ensure no floor numbers are null
//   if (floorNumbers.has(null)) {
//     return res.status(400).json({ success: false, message: "Floor number cannot be null" });
//   }

//   // Check for duplicates in the database
//   const existingListing = await listings.findOne({
//     "floors.floorNumber": { $in: Array.from(floorNumbers) },
//   });

//   if (existingListing) {
//     return res.status(400).json({ success: false, message: "Duplicate floor number exists in the database" });
//   }

//   const report = new listings({
//     name,
//     email,
//     hallticket,
//     gender,
//     course,
//     description,
//     floors: parsedFloors,
//     image: image_file,
//   });

//   try {
//     const savedReport = await report.save();
//     res.status(201).json({ success: true, report: savedReport });
//   } catch (error) {
//     console.error("Error saving report:", error);
//     res.status(500).json({ success: false, message: "Error saving report", error });
//   }
// };



export const addListing = async (req, res) => {
  const { name, email, hallticket, gender, course, description, floors } = req.body;
  let image_file = req.file ? `${req.file.filename}` : null;
  let parsedFloors = [];

  try {
    // Parse floors data to ensure it is a valid JSON
    parsedFloors = JSON.parse(floors);
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid floors data format" });
  }

  if (!Array.isArray(parsedFloors) || parsedFloors.length === 0) {
    return res.status(400).json({ success: false, message: "Floors should be a non-empty array" });
  }

  // Validate floor data
  for (const floor of parsedFloors) {
    if (!floor.floorNumber || !allowedFloors.includes(floor.floorNumber)) {
      return res.status(400).json({ success: false, message: `Invalid floor number: ${floor.floorNumber}` });
    }

    if (!floor.classes || !floor.classes.every(c => allowedClasses.includes(c))) {
      return res.status(400).json({ success: false, message: `Invalid classes for floor ${floor.floorNumber}` });
    }
  }

  const report = new listings({
    name,
    email,
    hallticket,
    gender,
    course,
    description,
    floors: parsedFloors,
    image: image_file,
  });

  try {
    const savedReport = await report.save();
    res.status(201).json({ success: true, report: savedReport });
  } catch (error) {
    console.error("Error saving report:", error);
    res.status(500).json({ success: false, message: "Error saving report", error });
  }
};

 


// fetch reports

// Fetch and show filtered reports
export const showReports = async (req, res) => {
  const { floor, classroom, course } = req.body;

  try {
    const filter = {};

    // Apply filter for floors and classes
    if (floor && classroom) {
      filter['floors'] = {
        $elemMatch: {                     // Use $elemMatch to match objects in the array
          floorNumber: Number(floor),      // Match floor number
          classes: classroom               // Match class in that floor
        }
      };
    }
   
    // Apply filter for course
    if (course) filter.course = course;
    //console.log(filter);
    

    // Fetch reports matching the filter
    const reports = await listings.find(filter);
    
    // Send response
    res.status(200).json({ success: true, data: reports });
   // console.log(reports);
    
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ success: false, message: "Error fetching reports", error });
  }
};


// user details 

export const userDetails=()=>{
  
}