import Task from "../../models/task.model.js";

export const getAllTodoTask = async (req, res) => {
        // get the status that we should search for
        const { status } = req.body;

        // check for wrong status input
        if (status != 'todo') {
            res.status(404).json({message: "wrong status input."})
        }
        
        // find the tasks related to that status
        try {
            await Task.find({
                status: 'todo'
            });
    
            res.status(200).json('All To-do task displayed.');
        } catch (error) {
            console.log(`error: ${error.message}`);
            res.status(500).json({success: false, message: 'Server error'});
        }
};