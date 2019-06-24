import LogoutService from '../../services/auth/logoutService';

export default class LogoutController {
    constructor() {};

    static logoutUser = async() => {
        return await LogoutService.logoutUser();
    }
}