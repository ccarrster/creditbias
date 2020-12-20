export class Application {
    amount: number;
    term: number;
    interest: number;
    income: number;
    approved: boolean;
    accepted: boolean;
    ethnicity: number;
    lender: number;
    constructor(amount: number, term: number, interest: number, income: number, approved: boolean, accepted: boolean, ethnicity: number, lender: number) {
        this.amount = amount;
        this.term = term;
        this.interest = interest;
        this.income = income;
        this.approved = approved;
        this.accepted = accepted;
        this.ethnicity = ethnicity;
        this.lender = lender;
     }
}