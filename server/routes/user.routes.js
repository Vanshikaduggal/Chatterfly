import express from 'express'
import { newUser } from '../controllers/user.controller';
import { singleAvatar } from '../middlewares/multer';

const app =express.Router();

app.post("/new",singleAvatar,newUser);


export default app;