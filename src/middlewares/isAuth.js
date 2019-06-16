import jwt from 'jsonwebtoken';


// const currentUser = (req, res, next) => {
//     const decoded = req.payload;
// }


const getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];
        return req.token;
    }
}


export { getTokenFromHeader,  };