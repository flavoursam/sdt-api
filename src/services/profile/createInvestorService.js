import Investor from '../../models/Investor';
import User from '../../models/User';

export default class CreateInvestorService {

	static createInvestor = async (id, firstName, lastName, email, role) => {
		const investor = await Investor.findOne({ email: email }).exec();

		if (investor) {
			return { msg: `${investor.email} already exists as investor.`};
		}
		
		let investorDoc = new Investor();
		investorDoc.id = id;
		investorDoc.firstName = firstName;
		investorDoc.lastName = lastName;
		investorDoc.email = email;
		investorDoc.role = role;

		return await investorDoc.save();
	}
}