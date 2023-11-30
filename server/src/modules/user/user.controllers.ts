import type { Request, Response, NextFunction } from 'express';
import { userSchema } from './user.type';
import { findUserByEmail, insertUser } from './user.services';
import { z } from 'zod';

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedEmail = userSchema.safeParse(req.body);

    if (!validatedEmail.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user data',
        error: validatedEmail.error,
      });
    }

    const newUser = await insertUser(validatedEmail.data);

    if (newUser) {
      return res.status(201).json({
        success: true,
        message: 'Successfully created new user',
        data: newUser,
      });
    }

    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedEmail = z.string().email().safeParse(req.params.email);

    if (!validatedEmail.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user email',
        error: validatedEmail.error,
      });
    }

    const foundUser = await findUserByEmail(validatedEmail.data);

    if (foundUser) {
      return res.status(201).json({
        success: true,
        message: 'Successfully retrieved user',
        data: foundUser,
      });
    }

    res.status(404).json({
      success: false,
      message: 'User was not found',
      error: null,
    });
  } catch (error) {
    next(error);
  }
};
