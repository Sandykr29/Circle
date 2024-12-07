import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
dotenv.config()

const PORT=process.env.PORT||8000;
const app=express();

app.use(express.json())
app.use(cookieParser())


const corsPolicy={
    origin:"http://localhost:5173",Credentials:true
}

app.use(cors(corsPolicy))

app.get("/",(_,res)=>{
    res.status(200).json({
        message:"This is Server running at port 8000",success:true
    })
})


app.listen(PORT,async()=>{
try {
    await connectDB();
    console.log(`Server is running at PORT ${PORT}`)
} catch (error) {
    console.log(error.message)
}
})