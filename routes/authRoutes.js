import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// TEMP ADMIN LOGIN (no DB yet)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@admin.com' && password === 'admin123') {
    const token = jwt.sign(
      { role: 'admin', email },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '1d' }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

export default router;
