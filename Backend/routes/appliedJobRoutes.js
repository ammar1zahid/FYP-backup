import express from "express";
import { getAppliedJobs, checkAppliedJob, applyJob, cancelJobApplication } from "../controllers/appliedJob.js";

const router = express.Router();

router.get("/", getAppliedJobs);
router.get("/check", checkAppliedJob);
router.post("/", applyJob);
router.delete("/", cancelJobApplication);

export default router;
