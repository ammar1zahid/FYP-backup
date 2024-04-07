import express from "express";
import {
  createMessage,
  getConversationMessages,
} from "../controllers/messages.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/:conversationId", getConversationMessages);

export default router;
