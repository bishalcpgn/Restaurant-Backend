// Register 

import { User } from "../models/userModel.js"

export const registerController = async (req, res) => {

    try {

        const { userName, email, password, phone, address } = req.body

        // validation according to model
        if (!userName) {
            return res.status(500).send({
                success: false,
                message: "Please input all the fields"
            })

        }

        //check if user exists 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already registered"
            });
        }

        // Create new user 

        const newUser = new User({ userName, email, password, phone, address });
        await newUser.save();

        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Register API",
            error
        })
    }

}