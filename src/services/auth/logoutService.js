import User from '../../models/User';

export default class LogoutService {
    constructor(){}

    static logoutUser = async () => {
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
              if(err) {
                return err;
              } else {
                  console.log('erer')
                end();
              }
            });
          }
        
    } 

}