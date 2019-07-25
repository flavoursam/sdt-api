import Researcher from '../../models/Researcher';
import User from '../../models/User';


export default class CreateResearcherService {

	static createResearcher = async (id, firstName, lastName, email, role) => {
        const user = await Researcher.findOne({ email: email }).exec();

        if (user !== null) {
			return { msg: `${user.email} already exists as user.`};
		}

		let researcherDoc = new Researcher();
		researcherDoc.id = id;
		researcherDoc.firstName = firstName;
		researcherDoc.lastName = lastName;
		researcherDoc.email = email;
		researcherDoc.role = role;

		const researcherSaved = await researcherDoc.save();
		return researcherDoc;

    }
}