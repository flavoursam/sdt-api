import User from '../models/user';

/**
 * 
 * @param {*} email 
 * @return user exists ? user document : null
 */
async function userExists(email) {
    console.log('in utils userExists() function:', email)
    return User.findOne({ email: email }).exec();
}




async function getUserByEmail(email) {
    console.log('in service getUserByEmail() function:', email)
    let userDoc = User.findOne({ email: email }).exec();

    let obj = {
        name: firstName + ' ' + lastName,
        email: email
    }
    return obj;

    // User.find({ email: email }, (err, response) => {
    //     if (err) {
    //         console.log('error!!!!!', err);
    //     } else {
    //         return response;
    //     }
    // })
}



export { userExists, getUserByEmail }