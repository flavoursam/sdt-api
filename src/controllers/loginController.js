import { LoginService } from '../services/loginService'

async function loginUser(data) {
	return await LoginService.loginUser(data);
}

export { loginUser };