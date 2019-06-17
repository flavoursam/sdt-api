import express from 'express';
import User from '../models/User';


class Assembler {
    // takes registration request data and assembles user object
    static userAssembler = async (registrationData)  => {
        const { firstName, lastName, email, pw, role } = registrationData;
        console.log('email', email)
        const createdAt = new Date();
        console.log('createdAt', createdAt);
        const createdBy = firstName + ' ' + lastName;

        
    
        
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

export default Assembler;