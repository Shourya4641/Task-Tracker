import Task from "../../models/task.model.js";

export const getAllInProgressTask = async (req, res) => {
    // get the status that we should search for
    const { status } = req.body;

    // check for wrong status input
    if (status != 'in-progress') {
        res.status(404).json({message: "wrong status input."})
    }
    
    // find the tasks related to that status
    try {
        await Task.find({
            status: 'in-progress'
        });

        res.status(200).json('All in-progress task displayed.');
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.status(500).json({success: false, message: 'Server error'});
    }
};