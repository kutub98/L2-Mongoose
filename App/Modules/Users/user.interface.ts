import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";

export interface IUser {
  id: string;
  role: "Student";
  name: {
    firstName: string;
    MiddleName?: string;
    lastName: string;
  };
  gender: ["male" | "female"];
  PresentAddress: string;
  PermanentAddress: string;
  contactNumber: string;
  EmergencyNumber: string;
  email?: string;
}
// Static

//Instance Methods
export interface IUserMethods {
  fullName(): string;
}
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
