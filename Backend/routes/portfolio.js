// routes/about.js

import express from "express";
import {

    saveAboutData,
    getAboutData,
    checkUserAboutid,

    saveEducationData,
    getEducationData,
    deleteEducationSection,
    getLastEducationSectionID
    

} from "../controllers/portfolio.js";

const router = express.Router();

// POST request to save About section data

// route for the api code that is checking about id value for the current user
router.get("/checkUserAboutid/:userId", checkUserAboutid);

router.get("/getAboutData/:userId", getAboutData);

router.post("/saveAboutData/:userId", saveAboutData);

router.post("/saveEducationData/:userId", saveEducationData);

router.get('/getEducationData/:userId', getEducationData);

router.delete('/deleteEducationSection/:educationSectionID', deleteEducationSection);


router.get('/getLastEducationSectionID', getLastEducationSectionID);


export default router;
