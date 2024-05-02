import express from "express";
import { 
    getSavedPostsDetail, getSavedPosts, checkSavedPost, getUsersSavedPost, 
    savePost, 
    unsavePost 
    } from "../controllers/savePosts.js";

const router = express.Router();

router.get("/", getSavedPosts);
router.get("/post", getSavedPostsDetail);
router.get("/check", checkSavedPost);
router.get("/users", getUsersSavedPost);

router.post("/", savePost);

router.delete("/", unsavePost);

export default router;
