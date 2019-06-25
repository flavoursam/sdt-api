import express from 'express';
import authRouter from './auth';
import profileRouter from './profile';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/profiles', [isAuthenticated], profileRouter);

export default router;