import mongoose from "mongoose";

export async function connectDB(MONGO_URI) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => resolve(MONGO_URI))
      .catch((err) => reject(err));
  });
}
