import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI, {
            dbName: "bit",
        });

        console.log("MongoDB connected successfully");
        console.log(`Database: ${mongoose.connection.name}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};