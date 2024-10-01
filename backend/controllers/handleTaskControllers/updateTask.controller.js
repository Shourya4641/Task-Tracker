import mongoose from 'mongoose';
import Task from '../../models/task.model.js';

export const updateTask = async (req, res) => {
    // get the task from the req body
    const { _id, ...updatedTask } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json({message: "Invalid task Id."});
    }

    // update the data in the database
    try {
        await Task.findByIdAndUpdate(
            _id,
            { $set: updatedTask },
            { new: true }
        );

        res.status(200).json({ message: "Task updated." });
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.status(500).json({ message: 'Server failed' });
    }

};