import express from "express";
// import { getPosts, addPost, deletePost } from "../controllers/post.js";
import { getPosts , getJobPosts ,getAppliedJobPosts, addPost, addRecruiterPost , deletePost} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);

//for fetching job posts
router.get("/jobs", getJobPosts);

//for fetching applied jobs of a user
router.get("/appliedjobsUser", getAppliedJobPosts);


//for student posting
router.post("/", addPost);

//for recruiter posting
router.post("/recruiterPost", addRecruiterPost);

router.delete("/:id", deletePost);

export default router;
