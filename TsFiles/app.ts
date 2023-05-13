
import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../App/Modules/Users/user.route"
const app : Application = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes);


export default app