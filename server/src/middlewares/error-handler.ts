import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message || 'Something went wrong',
    error: error || null,
  });
};

export default errorHandler;
