const mongoose = require('mongoose');
import app from "./app"
// const express = require('express')
// const cors = require("cors")

// import mongoose from "mongoose";
// import express from "express";
// import cors from "cors"

// const app = express()
// app.use((cors))
const port : number = 5000;




async function main() {
 try{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("Successfully Database Connected");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    
 }catch{
    console.log("something is error");
 }
}
main().catch(err => console.log(err));






