export const testUserController = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Test User Route is working"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in test user route",
            error
        })
    }
}