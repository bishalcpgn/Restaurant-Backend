import User from "../models/userModel.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 

// Register Controller
export const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, address } = req.body;

        // Validation checks
        if (!userName || !email || !password || !phone || !address) {
            return res.status(400).send({
                success: false,
                message: "All fields are required [ userName, email, password, phone, address ]"
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({
                success: false,
                message: "Invalid email format",
            });
        }

        // Password checks (at least 6 characters long)
        if (password.length < 6) {
            return res.status(400).send({
                success: false,
                message: "Password must be at least 6 characters long",
            });
        }

        // Phone number validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).send({
                success: false,
                message: "Invalid phone number format",
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already registered",
            });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            phone,
            address,
        });
        await newUser.save();

        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,
            }, // Only return non-sensitive info
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in Register API",
            error: error.message,
        });
    }
};



// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation checks
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Email and password are required",
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid credentials",
            });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        

        res.status(200).send({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            error: error.message,
        });
    }
};
