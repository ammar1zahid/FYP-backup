import express from "express";
import {
  createConversation,
  getUserConversations,
  getConversationBetweenUsers,
} from "../controllers/conversations.js";

const router = express.Router();

router.post("/", createConversation);
router.get("/:userId", getUserConversations);
router.get("/find/:firstUserId/:secondUserId", getConversationBetweenUsers);

export default router;
