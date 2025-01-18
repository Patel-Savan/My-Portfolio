import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import projectsRoute from './routes/projects.js';
import authRoute from './routes/auth.js';
import experienceRoute from './routes/experience.js';
import skillRoute from './routes/skill.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api/auth', authRoute);
app.use('/api/projects', projectsRoute);
app.use('/api/experience', experienceRoute );
app.use('/api/skill', skillRoute);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
