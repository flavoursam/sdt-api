var chai = require('chai');
var expect = chai.expect;
var http = require('chai-http');
chai.use(http);

import RegisterService from '../src/services/registerService';

describe("smoke test", function() {
    it("checks equality", function() {
      expect(true).to.be.true;
    });
  });

describe('User registration feature', () => {
    it('Should return a user object with ', (done) => {
        //mock valid user input
        const userData = {
            firstName: 'Samuel',
            lastName: 'Grennan',
            email: 'samuel.grennan@hotmail.com',
            password: 'password',
            role: 'researcher'
        }
        done();
    });

})

