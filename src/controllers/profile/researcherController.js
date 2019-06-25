import CreateResearcherService from '../../services/profile/createResearcherService';



export default class CreateResearcherController {
      constructor() { };

      static createResearcher = async (id, boundParams) => {
            const { firstName, lastName, email, password, role } = boundParams;
            console.log('hererere')
            return await CreateResearcherService.createResearcher(id, firstName, lastName, email, role);


            // else if (role === 'student') {
            //       return await CreateProfileService.createStudentProfile(id, firstName, lastName, email, role);
            // } else if (role === 'investor') {
            //       return await CreateProfileService.createInvestorProfile(id, firstName, lastName, email, role);
            // } else if (role === 'employee') {
            //       return await CreateProfileService.createEmployeeProfile(id, firstName, lastName, email, role);
            // }
      }


}