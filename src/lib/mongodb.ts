import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
if (uri) {
  throw new Error("please define mongo environment variable");
}

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  const opts = {
    bufferCommands: false,
  };
  await mongoose.connect(uri as string, opts);

  return mongoose;
}

export default connectToDatabase;
