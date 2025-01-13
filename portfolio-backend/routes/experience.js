import express from 'express';

import Experience from '../models/Experience.js';
import auth from '../middleware/auth.js';
import { experienceSchema } from '../validators/experienceValidator.js';
import validate from '../middleware/validate.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

router.post('/', auth, validate(experienceSchema),  async (req, res) => {
  const { companyName, role, startDate, endDate, description } = req.body;
  
  try {
    const newExperience = new Experience({
      companyName,
      role,
      startDate,
      endDate,
      description
    });
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Work experience not found' });
    }

    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedExperience);
  } catch (err) {
    res.status(400).json({ message: 'Error updating work experience', error: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Work experience not found' });
    }
    res.json({ message: 'Work experience deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

export default router;
