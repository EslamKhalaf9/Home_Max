import express, { Request, Response } from 'express';
import cors from 'cors';

import db from './models';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes';
import movieRouter from './routes/movieRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT;

db.sequelize.sync({force: true}).then(() => {
  console.log('syncing...');
});

app.use(cors());

app.use('/user', userRouter)
app.use('/movies', movieRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});