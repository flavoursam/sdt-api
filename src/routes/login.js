import express from 'express';
import LoginController from '../controllers/loginController';

const router = express.Router();

const loginHandler = (loginUser, params) => async (req, res, next) => {
	const requestData = params ? params(req, res, next) : [];

	try {
		const signedToken = await loginUser(requestData);

		return res.status(200)
					.cookie('token', signedToken, { maxAge: 86400 })
					.send('Login successful.');
	} catch (error) {
		return res.status(500).json(error);
	}

};


router.post('/', loginHandler(LoginController.loginUser, (req, res, next) => req.body));


export default router;