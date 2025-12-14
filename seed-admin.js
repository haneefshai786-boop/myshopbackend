import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const email = 'admin@gmail.com';
const plainPassword = 'admin123';

const exists = await Admin.findOne({ email });
if (exists) {
  console.log('Admin already exists');
  process.exit(0);
}

const hashed = await bcrypt.hash(plainPassword, 10);

await Admin.create({
  email,
  password: hashed
});

console.log('Admin created successfully');
process.exit(0);
