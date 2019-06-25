import User from '../../models/User';
import bcrypt from 'bcrypt';
import uuid from 'uuid';

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
			const id = uuid();

			let newUser = new User({ id, firstName, lastName, email, pw, role, createdAt });
			await newUser.save();

			let userObjRes = {
				id: newUser.id,
				name: newUser.firstName + ' ' + newUser.lastName,
				email: newUser.email,
				role: newUser.role,
				createdAt: newUser.createdAt,
			}

			return userObjRes;
		}
	}

}