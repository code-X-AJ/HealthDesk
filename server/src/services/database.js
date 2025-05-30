import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mango connected!!!`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
