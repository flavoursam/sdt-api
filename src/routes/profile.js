import express from 'express';
import GetProfileController from '../controllers/profile/getProfileController';
import { registerUser } from '../controllers/auth/registerController';
import { createProfile } from '../controllers/profile/profileController';

import ResearcherController from '../controllers/profile/researcherController';

const router = express.Router();

// view list of profiles
const getAllProfilesHandler = (getAllProfiles, params) => async(req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const result = await getAllProfiles();

        return res.status(200).json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
}

// create profile
const createProfileHandler = (registerUser, createProfile, params) => async(req, res, next) =>{ 
    const boundParams = params ? params(req, res, next) : [];    

    let data = boundParams[1];
    
    try {
        const registeredUser = await registerUser(data);
        const profileCreated = await createProfile(registeredUser.id, data); 

        // console.log('profileCreated', profileCreated)
        // console.log('registeredUser', registeredUser)
        return res.status(201)
                    .json({ registeredUser, profileCreated })
                    .end();
    } catch (error) {
        return res.status(500).json(error);
    }
}



router.get('/', getAllProfilesHandler(GetProfileController.getAllProfiles, (req, res, next) => []));
router.post('/:role', createProfileHandler(registerUser, createProfile, (req, res, next) => [req.params.role, req.body]));


// get single profile



export default router;