import express, { Router } from 'express'
import { login, register } from '../Controllers/UserAuth.js'
const router=express.Router()
import multer from 'multer'
import { addListing, showReports } from '../Controllers/Listings.js'

const storage=multer.diskStorage({
    destination:'uploads',
    limits: { fileSize: 10 * 1024 * 1024 },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})



router.post("/report", upload.single("image"), async (req, res) => {
     try {
       
        console.log("Request Body:", req.body);  
        console.log("Uploaded File:", req.file); 
        await addListing(req, res);
    } catch (error) {
         console.error("Error in adding listing:", error);
          res.status(500).json({ success: false, message: "Error in adding listing" });
         }
        });

router.post('/show',showReports)
router.post('/register',register)
router.post('/login',login)
export default router