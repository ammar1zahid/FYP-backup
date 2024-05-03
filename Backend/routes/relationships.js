import express from "express";
import { 
    getRelationships, 
    addRelationship, 
    deleteRelationship ,
    getFriends,
    getFriendsData ,
    getSuggestedFriends,
    getSuggestedFriendsData
} from "../controllers/relationship.js";

const router = express.Router()

router.get("/", getRelationships)
router.get("/friends/", getFriends)
router.get("/friendsdata/", getFriendsData)
router.get("/suggestedfriends/", getSuggestedFriends)
router.get("/suggestedfriendsdata/", getSuggestedFriendsData)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)


export default router