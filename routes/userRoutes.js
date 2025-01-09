import express from "express"
import { userDataController } from "../controllers/userDataController.js"

const router = express.Router()

//routes
// GET || USERDATA
router.get("/", userDataController)

export { router as userDataRoutes }