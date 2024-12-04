import express, { Router } from 'express'
import { login, register } from '../Controllers/UserAuth.js'
const router=express.Router()
import multer from 'multer'
import { addListing, listingshow } from '../Controllers/Listings.js'

const storage=multer.diskStorage({
    destination:'uploads',
    limits: { fileSize: 10 * 1024 * 1024 },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})



router.post("/report", upload.single("image"), async (req, res) => {
    // Log the body and file (to check what you are getting)
    console.log("Request Body:", req.body);  // Log request body
    console.log("Uploaded File:", req.file); // Log the uploaded file info

    // Now call the addListing function to store data in DB
    try {
        await addListing(req, res); // Pass req and res to your addListing function
    } catch (error) {
        console.error("Error in adding listing:", error);
        res.status(500).json({ success: false, message: "Error in adding listing" });
    }
});


router.get('/show',listingshow)
router.post('/register',register)
router.post('/login',login)
export default router