import { Split } from "./split";
import { User } from "./user";
export class EqualSplit extends Split {
    constructor(user:User, amount: number, count:number) {
        super(user)
        let split_amount = this.split(amount, count)
        this.amount = split_amount
    }

    public split(amount, count) {
        return amount/count
    }
}