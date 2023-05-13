import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUserFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction)=>{
    const data = req.body;
    const User = await createUserToDb(data);
    res.status(200).json({
        status: "Success",
        data: User
    })
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const PostedUser = await getUserFromDB()
    res.status(200).json({
        status: "Success",
        data: PostedUser
    })
}

    
