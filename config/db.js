// npm install mongoose

import mongoose from "mongoose";


// mongodb database connection 
export const connectDB = async () => {
 try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log(`Connected with DB ${mongoose.connection.host}`)
    
 } catch (error) {
    console.log("Error while connecting the database", error)
 }

}
