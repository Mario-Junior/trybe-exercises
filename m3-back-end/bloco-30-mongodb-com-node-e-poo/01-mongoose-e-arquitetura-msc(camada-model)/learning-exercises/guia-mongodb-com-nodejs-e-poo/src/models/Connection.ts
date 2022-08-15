// ./src/models/Connection.ts

import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI) => mongoose.connect(mongoDatabaseURI as any);

export default connectToDatabase;
