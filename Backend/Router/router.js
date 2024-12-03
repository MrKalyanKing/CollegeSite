import express, { Router } from 'express'
import { login, register } from '../Controllers/UserAuth.js'
const router=express.Router()
import multer from 'multer'
import { addListing } from '../Controllers/Listings.js'

const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})
router.post('/report',upload.single('image'),addListing)
router.post('/register',register)
router.post('/login',login)
export default router