// Importing the model
import restaurantModel from "../models/resturantModel.js";

export const resturantRouteController = async (req, res) => {

    try {
        const { title, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coordinates } = req.body

        // validation 
        if (!title) {
            return res.status(400).send({
                success: false,
                message: "Please provide all required fields"
            })
        }

        // create new resturant
        const newResturant = new restaurantModel({
            title,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coordinates
        })

        // save resturant
        await newResturant.save()

        res.status(200).send({
            success: true,
            message: "Resturant created successfully",
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in creating resturant",
            error
        })
    }

}


// Get all restaurants
export const getAllRestaurants = async (req, res) => {
    try {
        //  fetch all restaurants
        const restaurants = await restaurantModel.find();

        // Check if restaurants are available
        if (!restaurants || restaurants.length === 0) {
            return res.status(404).send({
                status: false,
                message: "No restaurants found",
            });
        }
    
        res.status(200).send({
            status: true,
            message: "Restaurants retrieved successfully",
            totalCount: restaurants.length,
            data: restaurants,
        });
    } catch (error) {
        console.error("Error in getting restaurants:", error);
        res.status(500).send({
            status: false,
            message: "Error in getting restaurants",
            error: error.message,
        });
    }
};



// Get a single restaurant by ID 
export const getResturantById = async (req, res) => {

    try {
        // extract ID from params in get method 
        const { id } = req.params

        if (!id) {
            return res.status(400).send({
                success: false,
                message: "Please provide a Resturant ID"
            })
        }

        const resturant = await restaurantModel.findById(id)

        if (!resturant) {
            return res.status(404).send({
                success: false,
                message: "Resturant not found"
            })
        }

        res.status(200).send({
            success: true,
            message: "Resturant retrieved successfully",
            data: resturant
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in getting resturant",
            error
        })
    }
}



