import { User, Thought } from "../models/index.js";
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        const userObj = {
            users
        };
        res.json(userObj);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).populate('thoughts').populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ user });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({ user });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const user = await User.findOneAndUpdate({ _id: userId }, updateData, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ user });
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params._id;
        await Thought.deleteMany({ userId: userId });
        const user = await User.findOneAndDelete({ id: userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: 'User and thoughts successfully deleted' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const addFriend = async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        const userId = req.params.id;
        const friendId = req.params.friendId;
        if (!friendId || userId == friendId) {
            return res.status(400).json({ message: 'Invalid friend ID' });
        }
        const user = await User.findOneAndUpdate({ _id: userId }, { $addToSet: { friends: friendId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ user });
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
export const deleteFriend = async (req, res) => {
    try {
        const userId = req.params.id;
        const friendId = req.params.friendId;
        if (!friendId || userId === friendId) {
            return res.status(400).json({ message: 'Invalid friend ID' });
        }
        const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ user });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
// Removed unused GetUsersResponse interface
export const getUsers = async (_req) => {
    // Implementation for fetching all users
};
// Removed duplicate declaration of getUserById to avoid redeclaration error
