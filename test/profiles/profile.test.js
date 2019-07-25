import { expect, should } from 'chai';

import sinon from 'sinon';

import User from '../../src/models/User';

import GetAllProfilesService from '../../src/services/profile/getAllProfilesService';
import users from '../fixtures/user.json';
import researchers from '../fixtures/researcher.json';


describe('profile service', () => {
    describe('getAllProfiles method', () => {
        it('should return a list of profiles that have properties id, fullName and role', async () => {
            
            let stub = sinon.stub(User, 'find').returns(users.users);
            const result = await GetAllProfilesService.getAllProfilesService();

            expect(result[0]).to.include({ 
                id: "1f011e55-6a3a-47ff-a0b0-17c0826bd7ec",
                fullName: "samuel jones",
                role: "researcher"
            })

            expect(result[0]).to.have.property('id');
            expect(result[0]).to.have.property('fullName');
            expect(result[0]).to.have.property('role');
            expect(result).to.have.length(3);
            
            stub.restore();
        })

        it('should return an empty list', async() => {
            let stub = sinon.stub(User, 'find').returns(users.emptyUsers);
            const result = await GetAllProfilesService.getAllProfilesService();
            expect(result).to.have.length(0);
            expect(result).to.be.empty;
            stub.restore();
        })


    })

})
    // describe('get all profiles with stubbing', () => {
    //     beforeEach(() => {
    //         const responseObj = {
    //             statusCode: 200,
    //             headers: {
    //                 'content-type': 'application/json'
    //             }
    //         }
            
    //         const responseBody = [
    //             {
    //                 "id": "1f011e55-6a3a-47ff-a0b0-17c0826bd7ec",
    //                 "fullName": "fred jones",
    //                 "role": "researcher",
    //             },
    //             {
    //                 "id": "09d1cbe8-86bb-4532-9144-ac325245b66b",
    //                 "fullName": "fred jones",
    //                 "role": "researcher"
    //             }
    //         ];
    //         this.get = sinon.stub(request, 'get');
    //     })
        
    //     afterEach(() => {
    //         request.get.restore();
    //     })

    //     describe('GET /profiles/', () => {
    //         it('should return all profiles with properties id, fullname, role', (done) => {
    //             this.get.yields(null, responseObj, JSON.stringify(responseBody));
    //             request.get(`${base}/profiles`, (err, res, body) => {
    //                 res.statusCode.should.eql(200);
    //                 res.headers['content-type'].should.contain('application/json');
    //                 body = JSON.parse(body);
    //                 body.data.length.should.eql(2);
    //                 body.data[0].should.include.keys(
    //                     'id', 'fullName', 'role'
    //                 );
    //                 body[0].id.should.eql('09d1cbe8-86bb-4532-9144-ac325245b66b');
    //                 done();
    
    //             })
    //         }) 

    //     })


    // })




// describe('Auth controller', () => {
//     describe('register Controller', () => {
//         describe('empty state', (done) => {
//             let response;
//             let user;

//             before(async() => {
// 				expect(await User.findOne({ email: 'valid@email.com' })).to.be.null;

//                 response = await request(app)
//                     .post('/auth/register')
//                     .send({
//                         firstName: 'sam',
//                         lastName: 'lee',
//                         email: 'valid@email.com',
//                         password: 'valid_password',
//                         role: 'researcher'
//                     });
//                 user = await User.findOne({ email: 'valid@email.com' });
//             })

//             after(async() => {
//                 await User.findOneAndDelete({ email: 'valid@email.com' });
//             })

//             it('should return 200', () => {
//                 console.log(response)
//                 expect(response).to.have.status(200);
//                 done();
//             })

//             sinon.restore();

//         })
//     })
// })