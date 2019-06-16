import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { env } from '../config/config';

class LoginService {

	constructor(){}

	static async loginUser(data) {	
		const { email, password } = data;
		const userDoc = await User.findOne({ email: email }).exec();
		console.log(userDoc)
		if (!userDoc) {
			// HANDLE USER NOT FOUND RESPONSE
		} else {
			const match = await bcrypt.compare(password, userDoc.pw);
			if (match) {
				return this.generateToken(userDoc);
			}			 
		}
	}

	static generateToken(userDoc) {
		const payload = {
			id: userDoc._id,
			email: userDoc.email,
			role: userDoc.role,
		}

		const signature = env.JWT_SECRET;
		const expiration = '6h';

		return jwt.sign(payload, signature, { expiresIn: expiration })
	}


	static passwordMatches(userDocPassword, reqPassword) {
		return bcrypt.compareSync(userDocPassword, reqPassword); 
	}
}

export { LoginService };