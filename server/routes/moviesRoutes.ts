import { Router } from "express";
import { userGet } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/', userGet)

export default userRouter;

