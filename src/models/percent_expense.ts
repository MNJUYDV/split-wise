import { Expense } from "./expense";
import { PercentSplit } from "./percent_split";

export class PercentExpense extends Expense {
    constructor(splits, amount, paidBy) {
        super(splits, amount, paidBy)
    }

    public validate() {
        for(let split of this.splits) {
            if(!(split instanceof PercentSplit))
                return false
        }
        return true
    }
}