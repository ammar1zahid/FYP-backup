import express from "express";
import { login,register,logout, addAdmin } from "../controllers/auth.js";

const router = express.Router()

 router.post("/login", login)
router.post("/register", register)
 router.post("/logout", logout)
 

 router.post("/addAdmin", addAdmin)


export default router