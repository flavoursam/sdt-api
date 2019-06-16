import express from 'express';
import _ from 'lodash';
import { registerUser } from '../controllers/registerController';

const router = express.Router();

const registerHandler = (registerUser, params) => async (req, res, next) => {

  const boundData = params ? params(req, res, next) : [];
  console.log(boundData)

  try {
    const result = await registerUser(boundData);
    
    return res.json(result || { message: 'OK' });
  } catch (error) {
    return res.status(500).json(error);
  }
}

router.post('/', registerHandler(registerUser, (req, res, next) => req.body));

export default router;