import express from "express";
import { 

    addToUniDomains,

    getAllAdmins



} from "../controllers/adminwork.js";



const router = express.Router()

 router.post("/addToUniDomains", addToUniDomains)
 router.get('/getAllAdmins', getAllAdmins);



export default router