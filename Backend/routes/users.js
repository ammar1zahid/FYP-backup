import express from "express";
import { getUser , updateUser, getAllUsers}  from "../controllers/user.js";

const router = express.Router()

router.get("/all", getAllUsers)
router.get("/find/:userId", getUser)
router.put("/", updateUser)


export default router