import { Split } from "./split";
import { User } from "./user";

export class PercentSplit extends Split {
    constructor(user:User, amount: number) {
        super(user)
        this.amount = amount
    }

    public split(amount) {
        this.amount = amount
    }
}