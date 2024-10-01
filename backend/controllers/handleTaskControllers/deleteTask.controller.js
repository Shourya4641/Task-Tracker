import mongoose from "mongoose";
import Task from "../../models/task.model.js";

export const deleteTask = async (req, res) => {
    // get the id from the req body
    const { _id } = req.body;

    // check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json({ message: "Invalid id."});
    }

    // find the id and delete
    try {
        await Task.findByIdAndDelete(_id);
        res.status(200).json({ message: "Task deleted successfully."});
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.status(500).json({success: false, message: 'Server failed'});
    }

};

// 1. get the id of the task
// 2. check if id is valid
// 3. find the task with the id and delete