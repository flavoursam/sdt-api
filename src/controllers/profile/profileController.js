import CreateProfileService from '../../services/createProfileService';

export default class ProfileController {
    constructor() {};

    static createProfile = async(id, boundParams) => {
        const { firstName, lastName, email, password, role } = boundParams;

        if (role === 'researcher') {
            return await CreateProfileService.createResearcherProfile(id, firstName, lastName, email, role);
		} else if (role === 'student') {
            return await CreateProfileService.createStudentProfile(id, firstName, lastName, email, role);
		} else if (role === 'investor') {
            return await CreateProfileService.createInvestorProfile(id, firstName, lastName, email, role);
		} else if (role === 'employee') {
            return await CreateProfileService.createEmployeeProfile(id, firstName, lastName, email, role);

		}
    }
}