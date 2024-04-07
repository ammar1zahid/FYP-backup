import express from "express";
import { getRelationships, addRelationship, deleteRelationship ,getFriends, getFriendsData } from "../controllers/relationship.js";

const router = express.Router()

router.get("/", getRelationships)
router.get("/friends/", getFriends)
router.get("/friendsdata/", getFriendsData)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)


export default router