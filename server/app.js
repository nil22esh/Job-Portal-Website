import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

import applicationRouter from "./routes/applicationRouter.js";
import userRouter from "./routes/userRouter.js";
import jobsRouter from "./routes/jobsRouter.js";
import dbConnect from "./database/dbConnection.js";
import errorMiddleware from "./middlewares/error.js";
const app = express();

dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: [process.env.FROENTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/jobs", jobsRouter);

dbConnect();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(
    `Server Started In ${process.env.ENVIRONMENT} Environment On Port ${process.env.PORT}.`
      .bgGreen
  );
});

export default app;
