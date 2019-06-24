import express from 'express';
import authRouter from './auth';
import profileRouter from './profile';

const router = express.Router();

router.use('/auth', authRouter);
// router.use('/profile', profileRouter);

export default router;