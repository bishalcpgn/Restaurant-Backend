

// GET USER INFO

export const userDataController = async (req, res) => {

    try {
        res.status(200).send("User Data")

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in getting user data",
            error
        })
    }



}