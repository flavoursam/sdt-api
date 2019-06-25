import RegisterService from '../../services/auth/registerService';
// import { Assembler } from '../assemblers/Assembler';

export default class RegisterController {
	static registerUser = async (data)  => {
		// if email exists, handle error response
		// else, assemble User object
		// save user object
		// assemble response object
		// return response object
		return await RegisterService.registerUser(data);
	}

}

