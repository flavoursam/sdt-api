import express from 'express';
import User from '../models/User';
import uuid from 'uuid';


export default class Assembler {
    // takes registration request data and assembles user object
    static userRegistrationReqAssembler = async (registrationData)  => {
        const { firstName, lastName, email, password, role } = registrationData;
		const createdAt = new Date();
        const id = uuid();

        const assembledUserReqObj = new User({
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            pw: password,
            role: role,
            createdAt: createdAt,
        })

        return assembledUserReqObj;
    }


    static userRegistrationResAssembler = async(data) => {
        let userObjRes = {
			id: data.id,
			name: data.firstName + ' ' + data.lastName,
			email: data.email,
			role: data.role,
        }
        
        return userObjRes;
    }


    static createdAt = async () => {
        var date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
      
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
      
        return year + month + day + '';
      }
}

