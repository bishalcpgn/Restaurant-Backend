
import express from "express"

import { authMiddleware } from "../middlewares/authMiddleware.js"
import { getAllRestaurants, getResturantById, resturantRouteController } from "../controllers/resturantController.js"


const router = express.Router()

// Routes 
//URL http://localhost:3000/api/v1/resturantRoutes/


// create a resturant 
router.post("/create", authMiddleware, resturantRouteController)

// get all resturants
router.get("/getAll", getAllRestaurants)

// get a single resturant by ID
router.get("/get/:id", getResturantById)

export { router as resturantRoutes }