import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index';


import { env } from './config/config'

const app = express();
// connect to mongoose
mongoose.connect(env.MONGO_URI, { useCreateIndex: true, useNewUrlParser: true })
    .then(console.log("Successfully connected to mongo cloud DB."))
    .catch(err => {
    console.log("Could not connect to mongo server!");
    throw err;
    });   //TO DO


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.get('/hello', function(req, res, next){return res.status(200); })

app.use('/', routes);


export default app;