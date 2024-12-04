
import express from  'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import router from './Router/router.js'
import cors from 'cors'
const port=3000
const app=express()
const Url=process.env.MONGO_URL

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

  app.use(cors({
    origin:'*',
    methods: ['GET', 'POST']
  }))
  

app.use('/api/user',router)

app.use('/api',router)

app.get('/',(req,res)=>{
    res.send('hi')
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
