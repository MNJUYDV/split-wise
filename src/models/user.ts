import {v4 as uuidv4} from 'uuid';
export class User {
    name: string;
    email: string;
    phone: string;
    id: string;

    constructor(name, email, phone) {
        this.name = name;
        this.email = email
        this.phone = phone
        this.id = uuidv4();
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }

    getPhone() {
        return this.phone
    }

    setPhone(phone) {
        this.phone = phone
    }

    getID() {
        return this.id
    }

    getUser() {
        return this
    }

}