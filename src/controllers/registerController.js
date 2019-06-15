import { RegisterService } from '../services/registerService'
import { userExists } from '../helpers/utils';

async function registerUser(boundData) {
  let registeredUser = await RegisterService.registerUser(boundData);
  return registeredUser;
}

export { registerUser };