import Researcher from '../../models/Researcher'
import Student from '../../models/Student';
import Investor from '../../models/Investor';
import Employee from '../../models/Employee';
import User from '../../models/User';

export default class GetAllProfilesService {

	static getAllProfilesService = async () => {
        const profiles = await User.find({});
        
        let arrRes = [];
        profiles.forEach(user => {
            let obj = {
                id: user.id,
                fullName: user.firstName +  ' ' + user.lastName,
                role: user.role,
            };
            arrRes.push(obj);
        })

        return arrRes;
        
    }
}