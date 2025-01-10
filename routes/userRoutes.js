import express from "express"
import { getUserDataController, updateUserDataController } from "../controllers/userDataController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

//routes
// GET || USERDATA
router.get("/get", authMiddleware, getUserDataController)

// UPDATE PROFILE
router.put("/update", authMiddleware, updateUserDataController)

export { router as userDataRoutes }