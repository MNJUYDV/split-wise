import { ExactSplit } from "./exact_split";
import { Expense } from "./expense";

export class ExactExpense extends Expense {
    constructor(splits, amount, paidBy) {
        super(splits, amount, paidBy)
    }

    public validate() {
        for(let split of this.splits) {
            if(!(split instanceof ExactSplit))
                return false
        }
        return true
    }
}