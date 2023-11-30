import express from 'express';
import { createNewUser, getUserByEmail } from './user.controllers';

const router = express.Router();

router.post('/', createNewUser);
router.get('/:email', getUserByEmail);

export default router;
