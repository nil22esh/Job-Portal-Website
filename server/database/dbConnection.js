import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_SEEKERS_DB",
    })
    .then(() => {
      console.log(
        `Successfully Connected To ${process.env.MONGO_URI} Database`.bgMagenta
      );
    })
    .catch((error) => {
      console.log(`Database Connection Error : ${error}`.bgRed);
    });
};

export default dbConnect;
