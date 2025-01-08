import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: [true, "Username is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    address: {
        type: Array,
        required: false

    },

    phone: {
        type: String,
        required: [true, "Phone number is required"]
    },

    usertype: {
        type: String,
        required: [true, "User Type is required"],
        default: "client",
        enum: ["client", "admin", "vendor", "driver"]
    },

    profile: {
        
        image: {
            type: String, // Use String if storing image URLs
            default: "https://images.app.goo.gl/R8HVaMZterWvbwjUA"
        }
    },

}, 

{ timestamps: true }

)



const User = mongoose.model("User", userSchema);
export default User 