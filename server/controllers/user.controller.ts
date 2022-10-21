import { Request, Response } from "express";

export const userGet = (req: Request, res: Response) => {
    res.send('users get route ');
}