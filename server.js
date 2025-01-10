import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import { authRoutes } from "./routes/authRoutes.js";
import { testRoutes } from "./routes/testRoutes.js";
import { connectDB } from "./config/db.js"
import { userDataRoutes } from "./routes/userRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

//dot env configuration
dotenv.config()


//DB connection 
connectDB();

const app = express()

//middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//route
app.use("/api/v1/test", testRoutes)

app.use("/api/v1/auth", authRoutes)

app.use("/api/v1/userData", userDataRoutes )


app.get("/", async (req, res, next) => {
    res.status(200).send("Hello from the server !")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

