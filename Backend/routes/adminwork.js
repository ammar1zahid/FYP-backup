import express from "express";
import { 

    addToUniDomains,

    getAllAdmins,
    addAdmin,
    updateAdmin



} from "../controllers/adminwork.js";



const router = express.Router()

 router.post("/addToUniDomains", addToUniDomains)

 router.get('/getAllAdmins', getAllAdmins);
 router.post("/addAdmin", addAdmin)
 router.post("/updateAdmin", updateAdmin)



export default router