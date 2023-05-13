import express from "express";
import { createUser, getAdminUsers, getUsers, getUsersByID } from "./user.controller";
const router = express.Router()
router.get('/', getUsers)
router.get('/admins', getAdminUsers)
router.get('/:id', getUsersByID)
router.post('/create-user', createUser)

export default router