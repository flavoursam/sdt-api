import CreateResearcherService from '../../services/profile/createResearcherService';
import CreateEmployeeService from '../../services/profile/createEmployeeService';
import CreateStudentService from '../../services/profile/createStudentService';
import CreateInvestorService from '../../services/profile/createInvestorService'; 



export default class CreateProfileController {
      constructor() { };

      static createProfile = async (id, boundParams) => {
            const { firstName, lastName, email, password, role } = boundParams;

            if (role === 'researcher') {
                  return await CreateResearcherService.createResearcher(id, firstName, lastName, email, role);
            } else if (role === 'employee') {
                  return await CreateEmployeeService.createEmployee(id, firstName, lastName, email, role);
            } else if (role === 'investor') {
                  return await CreateInvestorService.createInvestor(id, firstName, lastName, email, role);
            } else if (role === 'student') {
                  return await CreateStudentService.createStudent(id, firstName, lastName, email, role);

            }
      }


}