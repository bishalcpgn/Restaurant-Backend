

// GET USER INFO

import User from "../models/userModel.js"

export const getUserDataController = async (req, res) => {

    try {
        const user = await User.findById(req.body.id)

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            })
        }

        // returning user infomation 
        res.status(200).send({
            success: true,
            message:
            {
                "ID": user.id,
                "Username": user.userName,
                "Email": user.email,
                "Address": user.address,
                "Phone": user.phone
            }
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in getting user data",
            error
        })
    }
}

// UPDATE USER INFO

export const updateUserDataController = async (req, res) => {
    try {
        const user = await User.findById(req.body.id)

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            })
        }

        // UPDATING USER INFO

        const { userName, address, phone } = req.body
        if (userName) user.userName = userName
        if (address) user.address = address
        if (phone) user.phone = phone
        //SAVE USER
        await user.save()
        res.status(200).send({
            success: true,
            message: "User data updated successfully"
        })



    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in updating user data",
            error
        })

    }



}