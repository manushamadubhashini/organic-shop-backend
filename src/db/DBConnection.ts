import mongoose from "mongoose";
import dotenv from "dotenv"; // define mongodb url

dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL as string // mandatory need to url

const DBConnection = async () =>{
    try{
        const connection = await mongoose.connect(MONGO_DB_URL); // get connection
        return `Successfully Connected to MongoDB : ${connection.connection.host}`; // connection.connection.host is the hostname of the MongoDB server
    }catch (error){
        return "MongoDB Connection Error:" + error;
    }
}

export default DBConnection // DbConnection export to outside
