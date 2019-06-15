import User from '../orm/user';

export default class User {

    private id;
    private firstName;
    private lastName;
    private email;
    private password;
    private role;
    private createdAt;

    constructor(id, firstName, lastName, email, password, role, createdAt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }

    function getFirstName() {
        return this.firstName;
    }


}