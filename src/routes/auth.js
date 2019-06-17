import express from 'express';
import RegisterController from '../controllers/registerController';
import LoginController from '../controllers/loginController';
import LogoutController from '../controllers/logoutController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

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

const loginHandler = (loginUser, params) => async (req, res, next) => {
    const requestData = params ? params(req, res, next) : [];
    try {
        const signedToken = await loginUser(requestData);
        return res.status(200)          // .cookie('token', signedToken, { maxAge: 86400 })
                    .send(`Token: ${signedToken}`)      //TODO
                    .end();
    } catch (error) {
        return res.status(500).json(error);
    }
};

const logoutHandler = (logoutUser, params) => async(req, res, next) => {
    try {
        const logoutResponse = await logoutUser();
        return res.status(200)
                    .send(`Successfully logged out.`)
                    .end();
    } catch (error) {   
        return res.status(500).json(error);
    }
}


router.post('/register', registerHandler(RegisterController.registerUser, (req, res, next) => req.body));
router.post('/login', loginHandler(LoginController.loginUser, (req, res, next) => req.body));
router.get('/logout', isAuthenticated, logoutHandler(LogoutController.logoutUser));

export default router;