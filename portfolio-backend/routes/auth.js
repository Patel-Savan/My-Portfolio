import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import Admin from '../models/Admin.js';
import { adminSchema } from '../validators/adminValidator.js';
import validate from '../middleware/validate.js';

const router = express.Router();

// Admin login
router.post('/login', validate(adminSchema),  async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
