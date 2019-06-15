import express from 'express';

const mainSearchRouter = express.Router();

mainSearchRouter.route('/search', require('./researcherSearch'));


export default mainSearchRouter;