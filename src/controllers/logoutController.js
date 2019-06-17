import LogoutService from '../services/logoutService';

export default class LogoutController {
    constructor() {};

    static logoutUser = async() => {
        return await LogoutService.logoutUser();
    }
}