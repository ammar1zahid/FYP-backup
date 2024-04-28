import express from "express";
import { getAppliedJobs, checkAppliedJob, getUsersAppliedToJob, applyJob, cancelJobApplication } from "../controllers/appliedJob.js";

const router = express.Router();

router.get("/", getAppliedJobs);
router.get("/check", checkAppliedJob);
router.get("/users", getUsersAppliedToJob);
router.post("/", applyJob);
router.delete("/", cancelJobApplication);

export default router;
