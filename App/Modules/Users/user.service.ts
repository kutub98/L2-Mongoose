import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser):Promise<IUser> => {
    const user = new User (payload)
    await user.save()
    console.log("fullName", user.fullName());
    return user

    // we used here instance method 
  // here User is a class
  // here user new used for instance of class 
  // user.save is a method // that means instance method 
  }

  
  export const getUserFromDB = async()=> {
      const getUsers = await User.find()
      console.log(getUsers);
      return getUsers
  }
  export const getUserByIDFromDB = async(payload: string | null):Promise<IUser | null> => {
      const getUsers = await User.findOne({id: payload})
      console.log(getUsers);
      return getUsers
  }