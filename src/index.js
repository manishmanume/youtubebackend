import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import express from 'express';
dotenv.config({
    path: './.env'
})

const app = express();

ConnectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



