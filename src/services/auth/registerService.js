import User from '../../models/User';
import bcrypt from 'bcrypt';

export default class RegisterService {

	constructor() {};

	static registerUser = async(assembledUserReqObj) => {
		const pw = await bcrypt.hash(assembledUserReqObj.pw, 10)
		.then((hash) => {
			return hash;
		});
		
		assembledUserReqObj.pw = pw;
		
		let newUser = new User(assembledUserReqObj);
		
		
		return await newUser.save();
	}

}