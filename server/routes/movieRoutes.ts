import { Router } from "express";
import { getAllMoviesFS } from "../controllers/movie.controller";

const movieRouter = Router();

movieRouter.get('/', getAllMoviesFS)

export default movieRouter;

