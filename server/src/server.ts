import app from './app';
import mongoose from 'mongoose';
import { PORT, DB_URI } from './configs/index';

const main = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.listen(PORT, () => {
      console.log('[server] is running on http://localhost:8080/');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
