import express from 'express';

import { addTask } from '../controllers/handleTaskControllers/addTask.controller.js';
import { updateTask } from '../controllers/handleTaskControllers/updateTask.controller.js';
import { deleteTask } from '../controllers/handleTaskControllers/deleteTask.controller.js';

const router = express.Router();

router.post('/addTask', addTask);
router.put('/updateTask', updateTask);
router.delete('/deleteTask', deleteTask);


export default router;