import jwt from 'jsonwebtoken';
import { env } from '../config/config';

const isAuthenticated = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, env.JWT_SECRET, (err, payload) => {
            if (err) {
                res.status(404).send('token not valid.'); 
                next();
            } else {
                const { id, email, role } = payload;
                req.payload = { id, role };
                console.log('isAuthenticated success')
                next(); 

            }
        })
    } else {
        res.status(404)
            .send('Header not provided.')
            .end();
    }
}

export { isAuthenticated };
