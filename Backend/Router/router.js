import express, { Router } from 'express'
import { login, register } from '../Controllers/UserAuth.js'
const router=express.Router()
import multer from 'multer'
import { addListing, deleteReport, showReports } from '../Controllers/Listings.js'
import { adminLogin, registerAdmin } from '../Controllers/AdminAuth.js'
import { validateSchema } from '../middleware/middleware.js'

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
       
        // console.log("Request Body:", req.body);  
        // console.log("Uploaded File:", req.file); 
        await addListing(req, res);
    } catch (error) {
         console.error("Error in adding listing:", error);
          res.status(500).json({ success: false, message: "Error in adding listing" });
         }
        });
//show reports
router.post('/show',showReports)
//user register
router.post('/register',register)
//user login
router.post('/login',login)
//register for user admin
router.post('/admin',registerAdmin)
//admin login
router.post('/admin/login',adminLogin)
//Collapsing the submitted report
router.delete('/report/delete/:id',deleteReport)
export default router