// import express from 'express';
// import 

// const router = express.Router();


// const createProfileHandler = (createProfile, params) => async (req, res, next) => {
//   console.log('in createProfileHandler() function');
//   const boundParams = params ? params(req, res, next) : [];
  
//   try {
//     const result = await getUser(...boundParams);
//     return res.json(result || { message: 'OK' });
//   } catch (error) {
//     return res.status(500).json(error);
//   }

// };


// router.post('/role/:role/:id', createProfileHandler(getUser, (req, res, next) => [req.params.email]));


// export default router;