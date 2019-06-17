import express from 'express';
import RegisterController from '../controllers/registerController';

const router = express.Router();

const registerHandler = (registerUser, params) => async (req, res, next) => {
  const requestData = params ? params(req, res, next) : [];
  try {
    const result = await registerUser(requestData);
    return res.json(result || { message: 'OK' });
  } catch (error) {
    return res.status(500).json(error);
  }
}

router.post('/', registerHandler(RegisterController.registerUser, (req, res, next) => req.body));

export default router;