import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

/* REGISTER */
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'User exists' });

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash
  });

  res.json({ message: 'User registered' });
});

/* LOGIN */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user._id, role: 'user' },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({ token, user: { id: user._id, name: user.name } });
});

export default router;
