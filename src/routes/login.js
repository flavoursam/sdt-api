import express from 'express';
import _ from 'lodash';
import { loginUser } from '../controllers/loginController';

const router = express.Router();

const loginHandler = (loginUser, params) => async (req, res, next) => {
	const data = params ? params(req, res, next) : [];

	try {
		const signedToken = await loginUser(data);
		// result = token
		return res.status(200)
					.cookie('token', signedToken, { maxAge: 86400 })
					.send('Login successful.');
	} catch (error) {
		return res.status(500).json(error);
	}

};


router.post('/', loginHandler(loginUser, (req, res, next) => req.body));


export default router;