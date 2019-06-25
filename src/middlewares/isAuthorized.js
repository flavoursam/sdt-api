import jwt from 'jsonwebtoken';
import { env } from '../config/config';

// guard that protects routes against standard user requests
// decodes JWT and checks whether role === admin
const isAuthorized = (req, res, next) =>{
    if (req.payload.type !== 'admin') {
      res.status(401)
        .send({ message: 'unauthorized m8' })
        .end();
    } else {
      console.log('isAuthorized success')
  
      next();
    }
  
  }

export { isAuthorized };
