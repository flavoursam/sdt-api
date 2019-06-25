import Student from '../../models/Student';
import User from '../../models/User';


export default class CreateStudentService {

	static createStudent = async (id, firstName, lastName, email, role) => {
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
}