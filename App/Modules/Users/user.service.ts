import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser):Promise<IUser> => {
    const user = new User (payload)
    await user.save()
    return user
  }
  export const getUserFromDB = async()=> {
      const getUsers = await User.find()
      console.log(getUsers);
      return getUsers
  }