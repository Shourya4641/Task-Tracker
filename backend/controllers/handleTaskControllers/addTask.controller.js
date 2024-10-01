import Task from '../../models/task.model.js';

export const addTask = async (req, res) => {
    const task = req.body;

    // check if all fields are available
    if (!task.description || !task.status) {
        res.status(400).json({message: 'Provide all the fields.'});
    }

    // create a new task object
    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json({message: 'New Task added.'});
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({message: 'Server failed.'});
    }
};