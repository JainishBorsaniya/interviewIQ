import User from '../models/user.model.js';

const getCurrentUser = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId).select("-__v -createdAt -updatedAt");
        if(!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: `Error fetching current user: ${error.message}` });
    }
}

export default getCurrentUser;