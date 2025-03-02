import dotenv from 'dotenv';
import app from './src/app.js';
import http from 'http';
import { connectDB } from './src/services/database.js';

dotenv.config();

const port = process.env.PORT || 5000;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`Server running at port: ${port}`);
    });
  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }
};

startServer();
