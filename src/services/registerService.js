import User from '../models/user';
import bcrypt from 'bcrypt';

class RegisterService {

	constructor() {};

	static async registerUser(data) {
		const { firstName, lastName, email, password, role } = data;

		const user = await User.findOne({ email: email }).exec();
		
		if (user) {
			// handle user already exists response 
			// TO DO
		} else {
			// user does not exist, salt + hash pw, create new User object, save User
			const pw = await bcrypt.hash(password, 10).then((hash) => {
				return hash;
			});
			let newUser = new User({ firstName, lastName, email, pw, role });
			await newUser.save();

			let userObjRes = {
				name: newUser.firstName + ' ' + newUser.lastName,
				email: newUser.email
			}

			return userObjRes;
		}
	}

	static async hashPassword(user) {
		console.log('in hash passowrd')

		const hashedPassword = await new Promise((resolve, reject) => {
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) {
					reject('error hashing pw', err);
				} else {
					resolve(hash);
				}
			})
		})
		return hashedPassword;
	}
}


export { RegisterService };