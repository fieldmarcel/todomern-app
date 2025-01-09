import express from "express"
import mongoose from 'mongoose'
import { todo } from "./controllers/models/models.js";
import cors from "cors"
const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}))

app.use(express.json())
mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));
app.post('/add', async(req,res )=>{
    const {task}=req.body;

    try {//creating new task in database
        const newtask=await todo.create({task})
       res.status(200).json(newtask)
    } catch (error) {
        console.error('error in adding task',message)
        res.status(401).json({ error: 'Failed to add task', details: err.message })
    }
   
    
})


const port =3001;
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)

})

// try {
//     const mongoConnect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(`MongoDB connected:!!DB HOST: ${mongoConnect.connection.host}`);
// } catch (error) {
//     console.log("MongoDB connection error has happended:");
//     process.exit(1);
// }