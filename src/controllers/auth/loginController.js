import LoginService from '../../services/auth/loginService'


export default class LoginController {
	static loginUser = async(requestData) => {
		// if email !exists, handle response
		// else, compare password
		// generate token
		// assemble and return token response
		return await LoginService.loginUser(requestData);

	}
}

