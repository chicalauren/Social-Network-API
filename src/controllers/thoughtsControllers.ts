import { Request, Response } from 'express';
import { User, Thought } from "../models/index.js";

export const getAllThoughts = async (_req: Request, res: Response): Promise<void> => {
    try { 
        const thoughts = await Thought.find();
        const thoughtObj = {
            thoughts
        }
        res.json(thoughtObj);

    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const getThoughtById = async (req: Request, res: Response): Promise<void> => {
    try {
        const thoughtId = req.params.thoughtId;
        const thoughts = await Thought.findById(thoughtId);

        if (!thoughts) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }

        res.json({ thoughts });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const newThought = await Thought.create(req.body);
        const userId = req.body.id;
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { thoughts: newThought._id } },
            { new: true }
        );

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
         res.json({ newThought, user });

    } catch (err) {
         res.status(500).json(err);
    }
};

export const updateThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const thoughtId = req.params.thoughtId;
        const updateData = req.body;
        const thoughts = await Thought.findByIdAndUpdate(thoughtId, updateData, { new: true });

        if (!thoughts) {
             res.status(404).json({ message: "Thought not found" });
        }

         res.json({ thoughts });

    } catch (err) {
         res.status(500).json(err);
    }
};

export const deleteThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const thoughtId = req.params.thoughtId;
        const thoughts = await Thought.findOneAndDelete({ _id: thoughtId });

        if (!thoughts) {
             res.status(404).json({ message: 'Thought does not exist' });
        }
         res.json({ message: 'Thought successfully deleted' });

    } catch (err) {
        res.status(500).json(err);
    }
};

export const addReaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const thoughts = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );

        if (!thoughts) {
             res.status(404).json({ message: 'No thought with this ID exists' });
        }

        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const removeReaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const thoughts = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        );

        if (!thoughts) {
             res.status(404).json({ message: 'No thought with this id exists' });  
        }

        res.json({ message: 'Reaction successfully deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
};