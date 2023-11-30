import { Document, Schema, model } from 'mongoose';
import type { TUser } from './user.type';

type UserDocument = Document & TUser;

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [1, 'Name must be at least 1 character long'],
    maxlength: [30, 'Name cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxlength: [255, 'Email cannot exceed 255 characters'],
  },
  imgUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    maxlength: [2048, 'URL cannot exceed 2048 characters'],
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: {
      values: ['owner', 'renter'],
      message: 'Invalid user role',
    },
  },
});

const User = model('User', userSchema);

export default User;
