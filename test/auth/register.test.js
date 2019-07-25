import { expect, should } from 'chai';
import sinon from 'sinon';
import bcrypt from 'bcrypt';



import User from '../../src/models/User';
import RegisterService from '../../src/services/auth/registerService';
import { registerUser} from '../../src/controllers/auth/registerController';

import users from '../fixtures/user.json';
import researchers from '../fixtures/researcher.json';

import routes from '../../src/routes/auth';


describe('User registration feature', () => {
    describe('registerService class', () => {
        it('should return a user object with a hashed password', async() => {
            let now = new Date();
            let clock = sinon.useFakeTimers(now.getTime());

            let input = {
                id: 'id',
                firstName: 'Tracey',
                lastName: 'Truong',
                email: 'tracey@hotmail.com',
                pw: 'password',
                role: 'investor',
                createdAt: clock
            }

            let output = {
                id: 'id',
                firstName: 'Tracey',
                lastName: 'Truong',
                email: 'tracey@hotmail.com',
                pw: 'somehashedpw',
                role: 'investor',
                createdAt: clock
            }

            let hashStub = sinon.stub(bcrypt, 'hash').resolves('somehashedpw');
            let resultStub = sinon.stub(User.prototype, 'save').resolves(output);
            
            let result = await RegisterService.registerUser(input);

            expect(result).to.include(output)
         
            resultStub.restore();
            hashStub.restore();
            clock.restore();
            
        })
    })

    
    describe('user registration route handler', () => {
        describe('registerHandler route method', () => {
            it('should contain the correct input paramaters', async() => {
                const base = 'http://localhost:3000';
                let inputs = {
                    url: `${base}/auth/register`,
                    body: {
                        firstName: 'Tracey',
                        lastName: 'Truong',
                        email: 'tracey@hotmail.com',
                        pw: 'password',
                        role: 'investor',
                    }
                }

                const result = routes.post(inputs.url, registerUser(inputs.body));

                console.log(result)


            })
        })
    })


    // describe('user registration controller class', () => {
    //     it('should return early since email already exists in db', async() => {

    //         let now = new Date();
    //         let clock = sinon.useFakeTimers(now.getTime());
            
    //         let input = {
    //             firstName: 'Tracey',
    //             lastName: 'Truong',
    //             email: 'tracey@hotmail.com',
    //             pw: 'password',
    //             role: 'investor',
    //         }
            
    //         let userdoc = {
    //             id: 'id',
    //             firstName: 'Tracey',
    //             lastName: 'Truong',
    //             email: 'tracey@hotmail.com',
    //             pw: 'somehashedpw',
    //             role: 'investor',
    //             createdAt: clock
    //         }
            
    //         let userStub = sinon.stub(User.prototype, 'findOne').resolves(userdoc);
            
    //         const result = await registerUser(input);
    //         console.log(result)

    //         expect(result).to.eql(userdoc);
            
            
    //         clock.restore();
    //         userStub.restore();

    //     })
    // })
})