import RegisterService from '../../services/auth/registerService';
import {createProfile} from '../../controllers/profile/profileController';
import Assembler from '../../assemblers/assembler';
import User from '../../models/User';


const registerUser = async (data)  => {
	// if email exists, return
	const user = await User.findOne({ email: data.email }).exec();
	if (user) return;


	// else, assemble User object
	const assembledUserReqObj = await Assembler.userRegistrationReqAssembler(data);
	// create profile absed on role
	const createdProfile = await createProfile(assembledUserReqObj.id, data);
	// save user object
	const registered = await RegisterService.registerUser(assembledUserReqObj);
	// assemble response object
	const assembledRes = await Assembler.userRegistrationResAssembler(registered);
	// return response object
	return assembledRes;
}

export { registerUser};

