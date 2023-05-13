import mongoose,{ Model, model,Schema } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


type UserModel = Model<IUser, {}, IUserMethods>;
const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
      type: String, required: true, unique: true,
    },
    role: {
      type: String, required: true
    },
    name:{
      firstName: {
        type: String, required: true,
      },
      MiddleName: {
        type: String,
      },
      lastName:{
        type: String,
        required: true
      }
    },
    gender:{
      enum: ["male" , "female"]
    },
    PresentAddress: {
      type: String,
      required: true
    },
    PermanentAddress: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String,
      required: true
    },
    EmergencyNumber: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
  })
  // 3. Create a Model.
  UserSchema.method('fullName', function fullName() {
    return this.name.firstName + " " + this.name.lastName;
  });
const User = model<IUser, UserModel>('User', UserSchema);

export default User