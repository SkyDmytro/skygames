import mongoose from 'mongoose';

import { DB_URL } from '../utils/config';

const dbConnect = async () => {
  if (!DB_URL) {
    return console.error('Database connection error: DB_URL is not defined');
  }
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default dbConnect;
