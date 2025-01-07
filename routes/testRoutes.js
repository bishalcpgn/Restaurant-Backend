import express from "express";
import { testUserController } from "../controllers/testController.js";  // Add .js extension

//router object
const router = express.Router();

//routes for get, post, update and delete
router.get("/test-user", testUserController);

router.get("/test", (req, res) => {
    res.status(200).send({
        success: true,
        message: "Test route is working"
    });
});

//export
export {router as testRoutes}