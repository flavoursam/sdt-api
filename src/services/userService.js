import User from '../models/user';

export function getUserByEmail(email) {
    console.log('in service getUserByEmail() function:', email)
    User.find({ email: email }, (err, response) => {
        if (err) {
            console.log('error!!!!!', err);
        } else {
            return response;
        }
    })
}

export function userExists(email) {
    console.log('in service userExists() function:', email)
    User.find({ email: email }, (err, response) => {
        if (err) {
            console.log('error!!!!!', err);
        } else if (response.length > 0) {
            return true;
        } else {
            return false;
        }
    })
}