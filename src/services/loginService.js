import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { env } from '../config/config';

export default class LoginService {

	static loginUser = async (requestData)  => {
		const { email, password } = requestData;
		const userDoc = await User.findOne({ email: email }).exec();
		// console.log(userDoc)
		if (!userDoc) {
			// HANDLE USER NOT FOUND RESPONSE
			return { msg: `${userDoc.email} does not exist.` };
		} else {
			const match = await bcrypt.compare(password, userDoc.pw);
			// console.log(match)
			if (match) {
				return await this.generateToken(userDoc);
			} else {
				// HANDLE INCORRECT PASSWORD
				return { msg: `Incorrect password.` };
			}			 
		}
	}

	static async generateToken(userDoc) {
		const payload = {
			id: userDoc._id,
			email: userDoc.email,
			role: userDoc.role,
		}

		const signature = env.JWT_SECRET;
		const expiration = '6h';

		return jwt.sign(payload, signature, { expiresIn: expiration })
	}

}