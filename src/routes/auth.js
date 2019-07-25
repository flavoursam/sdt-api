import express from 'express';

import { registerUser } from '../controllers/auth/registerController';
import LoginController from '../controllers/auth/loginController';
import LogoutController from '../controllers/auth/logoutController';
import ProfileController from '../controllers/profile/profileController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = express.Router();


const registerHandler = (registerUser, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const registeredUser = await registerUser(boundParams);
        if (registeredUser !== undefined) {
            return res.status(201).json(registeredUser).end();
        }

        return res.status(500).json('email already exists');    //TODO

    } catch (error) {
        return res.status(500).json(error);
    }
}
router.post('/register', registerHandler(registerUser, (req, res, next) => req.body ));



const loginHandler = (loginUser, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const signedToken = await loginUser(boundParams);
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

router.post('/login', loginHandler(LoginController.loginUser, (req, res, next) => req.body));
router.get('/logout', isAuthenticated, logoutHandler(LogoutController.logoutUser, (req, res, next) => []));


export default router;