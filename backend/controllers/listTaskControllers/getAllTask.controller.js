import Task from "../../models/task.model.js";

export const getAllTasks = async (req, res) => {
    try {
        await Task.find({});
        res.status(200).json({message: "All the tasks displayed."});
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.status(500).json({ message: 'Server error'});
    }
};