import express from 'express';
import RegisterController from '../controllers/auth/registerController';
import LoginController from '../controllers/auth/loginController';
import LogoutController from '../controllers/auth/logoutController';
import ProfileController from '../controllers/profile/profileController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = express.Router();


const registerHandler = (registerUser, createProfile, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const registeredUser = await registerUser(boundParams);
        const profileCreated = await createProfile(registeredUser.id, boundParams); 
        console.log('profileCreated', profileCreated)
        return res.status(201)
                    .json(registeredUser)
                    .end();
    } catch (error) {
        return res.status(500).json(error);
    }
}



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

router.post('/register', registerHandler(RegisterController.registerUser, ProfileController.createProfile, (req, res, next) => req.body ));
router.post('/login', loginHandler(LoginController.loginUser, (req, res, next) => req.body));
router.get('/logout', isAuthenticated, logoutHandler(LogoutController.logoutUser, (req, res, next) => []));


export default router;