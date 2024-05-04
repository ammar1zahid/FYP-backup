import express from "express";
import { 
    getRelationships, 
    getRelationshipsData,
    addRelationship, 
    deleteRelationship ,
    getFollowersNotFollowedByCurrentUser,
    getFriends,
    getFriendsData ,
    getSuggestedFriends,
    getSuggestedFriendsData
} from "../controllers/relationship.js";

const router = express.Router()

router.get("/", getRelationships)
router.get("/followersdata/", getRelationshipsData)
router.get("/friends/", getFriends)
router.get("/friendsdata/", getFriendsData)
router.get("/followers/", getFollowersNotFollowedByCurrentUser)
router.get("/suggestedfriends/", getSuggestedFriends)
router.get("/suggestedfriendsdata/", getSuggestedFriendsData)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)


export default router