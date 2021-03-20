import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/router';
import '../typeorm';
import AppError from '../errors/AppErrors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: 'error',
      message: err.message,
    });
  }
  return res.status(500).json({
    error: 'error',
    message: 'Internal Server Error',
    que: err.message,
  });
});

app.listen(process.env.APP_API_PORT || 3000, () =>
  console.log(`Server running on ${process.env.APP_API_PORT}`),
);
