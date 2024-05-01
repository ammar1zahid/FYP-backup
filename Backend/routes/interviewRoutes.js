import express from "express";
import { 
    scheduleInterview,
    updateInterviewScheduledAt, 
    cancelInterview, 
    getInterviewsForRecruiter,
    getInterviewsForStudent,
    getInterviewsForPost
} from "../controllers/interview.js";

const router = express.Router();

router.post("/", scheduleInterview); // Route to schedule an interview
router.delete("/", cancelInterview); // Route to cancel an interview
router.put("/", updateInterviewScheduledAt); // Route to update the scheduled time of an interviews
router.get("/recruiter", getInterviewsForRecruiter); // Route to get interviews for a specific recruiter
router.get("/student", getInterviewsForStudent); // Route to get interviews for a specific student
router.get("/post", getInterviewsForPost); // Route to get interviews for a specific post


export default router;
