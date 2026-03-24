import User from "../models/user.model.js";
import generateToken from "../config/token.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ name, email });
        }

        const token = await generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            // secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: `Google authentication failed: ${error.message}` });
    }
};

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            // secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ error: `Logout error: ${error.message}` });
    }

}