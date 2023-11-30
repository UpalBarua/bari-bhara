import express, { type Request, type Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import errorHandler from './middlewares/error-handler';
import userRoutes from './modules/user/user.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// routes
app.use('/api/users', userRoutes);

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'There is no such route',
  });
});

app.use(errorHandler);

export default app;
