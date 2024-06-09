import express from "express";
import {
  employerAllApplications,
  jobSeekerAllApplications,
  jobSeekerDeleteApplication,
  postApplication,
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/employer/getall", isAuthenticated, employerAllApplications);
router.get("/jobseeker/getall", isAuthenticated, jobSeekerAllApplications);
router.delete("/delete/:id", isAuthenticated, jobSeekerDeleteApplication);
router.post("/post", isAuthenticated, postApplication);

export default router;
