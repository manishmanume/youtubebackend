import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json("30kb"));
app.use(express.urlencoded({extends: true, limit: "20kb"}));
app.use(express.static("public"));
app.use(cookieParser());


export { app }