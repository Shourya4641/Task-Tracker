import express from 'express';

import { getAllTasks } from '../controllers/listTaskControllers/getAllTask.controller.js';
import { getAllCompletedTask } from '../controllers/listTaskControllers/getAllCompletedTask.controller.js';
import { getAllTodoTask } from '../controllers/listTaskControllers/getAllTodoTask.controller.js';
import { getAllInProgressTask } from '../controllers/listTaskControllers/getAllInProgressTask.controller.js';

const router = express.Router();

router.get('/getAllTasks', getAllTasks);
router.get('/getAllCompletedTask', getAllCompletedTask);
router.get('/getAllTodoTask', getAllTodoTask);
router.get('/getAllInProgressTask', getAllInProgressTask);

export default router;