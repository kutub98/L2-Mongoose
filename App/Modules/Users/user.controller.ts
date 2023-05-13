import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminUsersFromDB, getUserByIDFromDB, getUserFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const User = await createUserToDb(data);
  res.status(200).json({
    status: "Success",
    data: User,
  });
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const PostedUser = await getUserFromDB();
  res.status(200).json({
    status: "Success",
    data: PostedUser,
  });
};
export const getUsersByID = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const PostedUser = await getUserByIDFromDB(id);
  res.status(200).json({
    status: "Success",
    data: PostedUser,
  });
};
export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
  const getAdmin = await getAdminUsersFromDB();
  res.status(200).json({
    status: "Success",
    data: getAdmin,
  });
};
