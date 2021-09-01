import { User } from "./user";

export class Split {
    user: User;
    amount: number;

    constructor(user:User) {
        this.user = user
    }

    public getAmount() {
        return this.amount
    }

    public setAmount(amount) {
        this.amount = amount
    }

    public getUser() {
        return this.user
    }

    public setUser(user) {
        this.user = user
    }
}