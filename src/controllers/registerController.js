import { RegisterService } from '../services/registerService'

async function registerUser(boundData) {
  	return await RegisterService.registerUser(boundData);
}

export { registerUser };