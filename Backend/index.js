
import express from  'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import router from './Router/router.js'
import cors from 'cors'
const port=3000
const app=express()
import path from 'path'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url';
import { UserModel } from './models/Usermodel.js'
import bodyParser from 'body-parser'
const Url=process.env.MONGO_URL
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: true }));
// Create __dirname equivalent for ES modules 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use(bodyParser.json())

  app.use(cors({
    origin:'*',
    methods: ['GET', 'POST']
  }))
  

app.use('/api/user',router)

app.use('/api',router)

app.get('/',(req,res)=>{
    res.send('hi')
})

 app.get('/api/user', async (req, res) => {
   const authHeader = req.headers['authorization']; 
   if (!authHeader) {
     return res.status(401).json({ message: 'No token provided' }); 
    } 
    const token = authHeader.split(' ')[1]; // Remove 'Bearer' from the token
     if (!token) { 
      return res.status(401).json({ message: 'No token provided' }); 
    } 
    try { 
      const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your secret key 
      const user = await UserModel.findById(decoded.id); 
      if (!user) { 
        return res.status(404).json({ message: 'User not found' }); 
      }
         res.json(user); } catch (error) { res.status(400).json({ message:'Invalid token' }); } });
     


     // send Email
    app.post('/api/sendemail', async(req,res)=>{
      const {email,name,hallticket,gender,course,description,floors} =req.body
    try{
      const transporter=nodemailer.createTransport({
        service:'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
          user:process.env.USER_EMAIL,
          pass:process.env.USER_PASS,
        },
      })
      const sendEmail={
        from:email,
        to:process.env.USER_EMAIL,
        subject:'New Submitted Report',
        html:`
        <h2>New Feedback Report</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Hall Ticket:</strong> ${hallticket}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Floor and Class:</strong> ${floors.map(f => `Floor: ${f.floorNumber}, Class: ${f.classes.join(", ")}`).join("; ")}</p>
        <p><strong>Description:</strong> ${description}</p>
        <span><strong>Check Image Login to your Admin pannel </strong><span>
        `,
      }
       // send email
    const info =await transporter.sendMail(sendEmail)
    //console.log('email sent ssuccesfull',info)
    return res.json({success:true,message:'msg sent!'})
    }catch(err){
    //console.error("Error sending email: ", err);
    res.status(500).json({ success: false, message: "Error sending email" });
    }
    })

   

app.listen(port,()=>{
    console.log(`App is Running port${port}`)
})
//Database Connection
mongoose.connect(Url)
.then(()=>{
    console.log('DB Connected')
})
.catch((err)=>{
    console.log(err)
})
