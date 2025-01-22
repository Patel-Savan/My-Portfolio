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

  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  const {title, company, timePeriod, location, responsibilities } = req.body;
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Work experience not found' });
    }

    if (company) experience.company = company;
    if (title) experience.title = title;
    if (timePeriod) experience.timePeriod = timePeriod;
    if (location) experience.location = location;
    if (responsibilities) experience.responsibilities = responsibilities;

    const updatedExperience = await experience.save();
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
