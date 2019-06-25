import GetAllProfilesService from '../../services/profile/getAllProfilesService';

export default class GetProfileController {
    constructor() { };

    static getAllProfiles = async () => {
        return await GetAllProfilesService.getAllProfilesService();
    }

}