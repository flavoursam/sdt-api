import express from 'express';
import registerRouter from './register';
import loginRouter from './login';
import userRouter from './user';

const router = express.Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);

router.use('/user', userRouter);

export default router;