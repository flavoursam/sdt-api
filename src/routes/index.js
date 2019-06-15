import express from 'express';
import registerRouter from './register';
import userRouter from './user';

const router = express.Router();

router.use('/register', registerRouter);

router.use('/user', userRouter);

export default router;