export interface IUser {
    id: string,
    role: "Student";
    name:{
      firstName: string,
      MiddleName?: string,
      lastName: string
    }
    gender: ["male" | "female"];
    PresentAddress: string,
    PermanentAddress: string
    contactNumber: string,
    EmergencyNumber: string,
    email?: string,
  }