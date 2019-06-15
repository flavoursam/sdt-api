import User from '../models/user';
import bcryptjs from 'bcryptjs';
import { userExists } from '../helpers/utils';

class RegisterService {
  static async registerUser(boundData) {
    const { firstName, lastName, email, password, role } = boundData;
    let user = await userExists(email);
    if (user) {
      // handle user already exists response 
    } else {
      let pw = await bcryptjs.hash(password, 10);
      let newUser = new User({ firstName, lastName, email, pw, role });
      await newUser.save();

      let userObjRes = {
        name: newUser.firstName + ' ' + newUser.lastName,
        email: newUser.email
      }

      return userObjRes;
    }
  }
}

export { RegisterService };
