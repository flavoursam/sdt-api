import express from 'express';
import authRouter from './auth';
import profileRouter from './profile';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isAuthorized } from '../middlewares/isAuthorized';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/profiles', [isAuthenticated, isAuthorized], profileRouter);

export default router;