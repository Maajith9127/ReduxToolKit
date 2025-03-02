import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import RegisterRouter from './api/routes/RegisterRoute.js';
import LoginRouter from './api/routes/LoginRouter.js';



dotenv.config()
const app = express()
const port = 3000


app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}
)); // Enable CORS

app.use(cookieParser())
app.use(session({
  secret: "yourSecretKey",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true}
}))

app.use(express.json());



mongoose.connect("mongodb+srv://maajithanas:nWCLYUbtCaq4DYjL@cluster0.8sxar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("🔥 MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));





//API ROUTES
app.use("/reg",RegisterRouter)
app.use("/log",LoginRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



