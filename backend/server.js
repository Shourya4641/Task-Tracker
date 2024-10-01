import express from 'express';
import dotenv from 'dotenv';

import handleTaskRoute from '../backend/routes/handleTask.route.js';
import listTaskRoutes from '../backend/routes/listTask.route.js';

import { connectDB } from './lib/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/v1/handleTasks', handleTaskRoute);
app.use('/api/v1/listTasks', listTaskRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

