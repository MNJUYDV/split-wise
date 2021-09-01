import { EqualExpense } from "src/models/equal_expense";
import { EqualSplit } from "src/models/equal_split";
import { Expense } from "src/models/expense";
import { User } from "src/models/user"
import { ExactSplit } from "src/models/exact_split";
import { ExactExpense } from "src/models/exact_expense";
import { validate } from "uuid";
export class SplitWiseService {
    expenses: Expense[];
    users: User[];
    balanceSheet: {[key: string]: [{[key:string]: [value:number]}]}

    constructor() {
        this.expenses = new Array()
        this.users = new Array()
    }

    addUsers(users) {
        for(let user of users) {
            this.users.push(new User(
                user.name, 
                user.email,
                user.phone))
        }
    }

    findByName(name) {
        for(let user of this.users) {
            if(user.name == name)
                return user
        }
    }

    addExpenses(expenses) {
        for(let expense of expenses) {
            let paidByUser = this.findByName(expense[0]) 
            let expense_amount = expense[1]
            let users_splited_count = parseInt(expense[2])
            let type = expense[expense.length -1]
            switch(type) {
                case "EQUAL": {
                    let splits = []
                    let n = users_splited_count + 3
                    for(let i=3;i<n;i++) {
                        let user = this.findByName(expense[i])
                        splits.push(new EqualSplit(
                            user,
                            expense_amount,
                            users_splited_count
                        ))                    
                    }    
                    this.expenses.push(
                        new EqualExpense(
                            splits, expense_amount, paidByUser
                        )
                    )
                    break;
                }
                case "EXACT": {
                    let splits = []
                    let n = users_splited_count + 3
                    let amount_index = n
                    for(let i=3;i<n;i++) {
                        let user = this.findByName(expense[i])
                        let split_amount = parseInt(expense[amount_index])
                        splits.push(new ExactSplit(
                            user,
                            split_amount
                        ))  
                        amount_index++;                  
                    } 
                    let user = this.findByName(expense[0])
                    splits.push(new ExactSplit(
                        user,
                        parseInt(expense[1])
                    ))  
                    this.expenses.push(
                        new ExactExpense(
                            splits, expense_amount, paidByUser
                        )
                    )
                    break;
                }      
            }
        }
    }

    public showBalance(req) {
        let body = req.body
        validate(body)
        let results = []
        this.addUsers(body.users)
        this.addExpenses(body.expenses)
        let balanceSheet = {}
        for(let expense of this.expenses ) {
            let paidBy = expense.getPaidBy().getName()
            let splits = expense.getSplits();
            for(let split of splits) {
                let split_partner_name = split.getUser().getName()
                if(!(split_partner_name in balanceSheet)) {
                    balanceSheet[split_partner_name] = {}
                }
                if(paidBy in balanceSheet[split_partner_name]) {
                    balanceSheet[split_partner_name][paidBy] += split.getAmount()
                }
                else 
                    balanceSheet[split_partner_name][paidBy] = split.getAmount()     
            }  
        }    
        return balanceSheet
    }
}