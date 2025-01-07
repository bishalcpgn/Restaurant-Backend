import express from "express";
import { registerController } from "../controllers/authControllers.js";  // Add .js extension

const router = express.Router();

// routes 
// POST || REGISTER
router.post("/register", registerController);

export { router as authRoutes };