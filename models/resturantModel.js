
import mongoose from "mongoose"


// Schema

const resturantSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Resturant title is required"]
    },

    imageUrl: {

        type: String,
    },

    foods: {
        type: Array,
    },

    time: {
        type: String,
    },

    pickup: {
        type: String,
    },

    delivery: {
        type: String,
    },

    isOpen: {
        type: Boolean,
        default: true
    },

    logoUrl: {
        type: String,
    },

    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },

    ratingCount: {
        type: String
    },

    code: {
        type: string
    },

    // map coordinares, google map api is paid 
    coordinates: {
        id: { type: String },
        latitude: { type: Number },
        latitudeDelta: { type: Number },
        longitude: { type: Number },
        longitudeDelta: { type: Number },
        address: { type: String },
        title: { type: String },

    },
},

    { timestamps: true }
)









