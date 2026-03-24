import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        let {token} = req.cookies;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded || !decoded.userId) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ error: `Unauthorized: ${error.message}` });
    }
}

export default isAuth;