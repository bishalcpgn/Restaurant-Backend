
import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        // Get token
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({
                success: false,
                message: "Authorization header missing",
            });
        }

        const token = authHeader.split(" ")[1];

        //verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).send({
                    success: false,
                    message: "Invalid token",
                });
            }

            // Extract user ID from decoded token
            req.body.id = decoded.id; 

            // Continue to the next middleware
            next(); 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};
