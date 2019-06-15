import express from 'express';
import { getUser } from '../controllers/userController';

const router = express.Router();


const controllerHandler = (getUser, params) => async (req, res, next) => {
  console.log('in controllerHandler() function');
  const boundParams = params ? params(req, res, next) : [];
  
  try {
      console.log('erwerew')
    const result = await getUser(...boundParams);
    return res.json(result || { message: 'OK' });
  } catch (error) {
    return res.status(500).json(error);
  }

};


router.get('/:email', controllerHandler(getUser, (req, res, next) => [req.params.email]));


export default router;