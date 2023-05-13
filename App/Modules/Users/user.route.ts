import express from "express";
import { createUser, getUsers, getUsersByID } from "./user.controller";
const router = express.Router()
router.get('/', getUsers)
router.get('/:id', getUsersByID)
router.post('/create-user', createUser)

export default router