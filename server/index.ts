import express, { Request, Response } from 'express';
import db from './models';
import dotenv from 'dotenv';
import userRouter from './routes/moviesRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT;

db.sequelize.sync({force: true}).then(() => {
  console.log('syncing...');
});

app.use('/user', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});