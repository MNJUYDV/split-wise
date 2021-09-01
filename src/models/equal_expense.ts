import { EqualSplit } from "./equal_split";
import { Expense } from "./expense";

export class EqualExpense extends Expense {
    constructor(splits, amount, paidBy) {
        super(splits, amount, paidBy)
    }

    public validate() {
        for(let split of this.splits) {
            if(!(split instanceof EqualSplit))
                return false
        }
        return true
    }
}