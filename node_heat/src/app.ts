import "dotenv/config";
import { Request,Response } from "express";
import http from "http"
import {router} from "./routes";
import {Server} from 'socket.io';
import cors from 'cors';
var express = require('express');

const app = express();
app.use(cors());
const serverHttp=http.createServer(app);

const io =new Server(serverHttp,{
    cors:{
        origin:"*"
    }
})
io.on("connection",socket=>{
    console.log(`Usuario connectado no socket ${socket.id}`)
})

app.use(express.json());
app.use(router);
app.get("/github",(request:Request,response:Response)=>{
    response.redirect(`https:github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback",(request:Request,response:Response)=>{
    const {code}=request.query;
    return response.json(code)
})
export {serverHttp,io}

