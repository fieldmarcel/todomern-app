import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const mongoConnect = await mongoose.connect(`${process.env.MONGODB_URI}/todo`);
        console.log(`MongoDB connected:!!DB HOST: ${mongoConnect.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error has happended:",error.message);
        process.exit(1);
    }
};

export default connectDB;
