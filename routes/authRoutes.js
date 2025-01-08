import express from "express";
import { loginController, registerController } from "../controllers/authControllers.js";  // Add .js extension

const router = express.Router();

// routes 
// POST || REGISTER
router.post("/register", registerController);

//POST || LOGIN
router.post("/login", loginController  )

export { router as authRoutes };