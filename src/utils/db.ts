import mongoose from "mongoose";
export const connect = async() => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .catch((err) => console.log(err))
    .then(() => console.log("Connected successfully!"));
};
