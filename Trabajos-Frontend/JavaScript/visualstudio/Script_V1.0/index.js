import { connectDB } from './base/MiBase.js';

const startServer = async () => {
  const connected = await connectDB();

  if (connected) {
    console.log('Server on port 3000');
  } else {
    console.log('Error connecting to the database');
  }
};

startServer();
