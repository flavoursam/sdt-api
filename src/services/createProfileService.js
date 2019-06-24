import Researcher from '../models/Researcher';
import Student from '../models/Student';
import Investor from '../models/Investor';
import Employee from '../models/Employee';

export default class CreateProfileService {

	static createResearcherProfile = async (id, firstName, lastName, email, role) => {
		const researcher = await Researcher.findOne({ email: email }).exec();
		if (researcher) {
			return { msg: `${researcher.email} already exists as researcher.`};
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

	static createEmployeeProfile = async (id, firstName, lastName, email, role) => {
		const employee = await Employee.findOne({ email: email }).exec();
		if (employee) {
			return { msg: `${employee.email} already exists as employee.`};
		}
		
		let employeeDoc = new Employee();
		employeeDoc.id = id;
		employeeDoc.firstName = firstName;
		employeeDoc.lastName = lastName;
		employeeDoc.email = email;
		employeeDoc.role = role;

		const employeeSaved = await employeeDoc.save();

		return employeeSaved;

	}

	static createStudentProfile = async (id, firstName, lastName, email, role) => {
		const student = await Student.findOne({ email: email }).exec();
		if (student) {
			return { msg: `${student.email} already exists as student.`};
		}
		
		let studentDoc = new Student();
		studentDoc.id = id;
		studentDoc.firstName = firstName;
		studentDoc.lastName = lastName;
		studentDoc.email = email;
		studentDoc.role = role;

		const studentSaved = await studentDoc.save();

		return studentSaved;

	}

	static createInvestorProfile = async (id, firstName, lastName, email, role) => {
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

		const investorSaved = await investorDoc.save();

		return investorSaved;

	}
}