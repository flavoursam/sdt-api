import Employee from '../../models/Employee';
import User from '../../models/User';


export default class CreateEmployeeService {

	static createEmployee = async (id, firstName, lastName, email, role) => {
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

		return await employeeDoc.save();
    }
}