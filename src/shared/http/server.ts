import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/router';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(process.env.APP_API_PORT || 3000, () =>
  console.log(`Server running on ${process.env.APP_API_PORT}`),
);
