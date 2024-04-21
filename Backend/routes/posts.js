import express from "express";
// import { getPosts, addPost, deletePost } from "../controllers/post.js";
import { getPosts, addPost, addRecruiterPost , deletePost} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
//for student posting
router.post("/", addPost);
//for recruiter posting
router.post("/recruiterPost", addRecruiterPost);

router.delete("/:id", deletePost);

export default router;
