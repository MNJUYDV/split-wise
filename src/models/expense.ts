import {v4 as uuidv4} from 'uuid';
import { Split } from './split';
import { User } from './user';
export class Expense {
    id: string;
    splits: Split[];
    amount: number;
    paidBy: User;

    constructor(splits, amount, paidBy) {
        this.splits = splits
        this.amount = amount;
        this.paidBy = paidBy
        this.id = uuidv4()
    }

    getSplits() {
        return this.splits
    }

    getID() {
        return this.id
    }

    getPaidBy() {
        return this.paidBy
    }

    getAmount() {
        return this.amount
    }

    setSplits(splits) {
        this.splits = splits
    }

    setAmount(amount) {
        this.amount = amount
    }

    setPaidBy(paidBy) {
        this.paidBy = paidBy
    }
}