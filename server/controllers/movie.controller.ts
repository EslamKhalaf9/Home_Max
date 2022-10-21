import { Request, Response } from "express";
import MovieUtil from "../utils/MovieUtil";

export const getAllMoviesFS = async(req: Request, res: Response) => {
    const movieUtil = new MovieUtil();
    try {
        const movies = await movieUtil.getAllMovieFS();
        res.status(200).send(movies);
    } catch (error) {
        res.status(400).send("error getting all movies");
    }
}