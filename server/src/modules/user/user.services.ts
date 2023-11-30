import { TUser } from './user.type';
import User from './user.model';

export const insertUser = async (user: TUser) => {
  const newUser = new User(user);
  return await newUser.save();
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};
