import { model,Schema } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>({
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
const User = model<IUser>('User', UserSchema);

export default User