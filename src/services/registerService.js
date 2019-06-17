import User from '../models/User';
import bcrypt from 'bcrypt';

export default class RegisterService {

	constructor() {};

	static registerUser = async(requestData) => {
		const { firstName, lastName, email, password, role } = requestData;
		const user = await User.findOne({ email: email }).exec();
		
		if (user) {
			return { msg: `${user.email} already exists.`};
		} else {
			// user does not exist, salt + hash pw, create new User object, save User
			const pw = await bcrypt.hash(password, 10).then((hash) => {
				return hash;
			});
			const createdAt = new Date();
			const createdBy = firstName + ' ' + lastName;

			let newUser = new User({ firstName, lastName, email, pw, role, createdAt, createdBy });
			await newUser.save();

			let userObjRes = {
				name: newUser.firstName + ' ' + newUser.lastName,
				email: newUser.email,
				role: newUser.role,
				createdAt: newUser.createdAt,
				createdBy: newUser.firstName + ' ' + newUser.lastName,
			}

			return userObjRes;
		}
	}

}