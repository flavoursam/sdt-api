import dotenv from 'dotenv';

dotenv.config();


const env = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY

}

export { env };