import { moneyFormatter } from './formatter';

export function getTotalBalance(transactions) {
    const amounts = transactions?.map((transaction) => +transaction.amount);
    const total = amounts?.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return total;
}

export function calculateIncomeExpense(transactions) {
    const amounts = transactions.map((transaction) => +transaction.amount);

    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense =
        amounts
            .filter((item) => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1;

    const formattedIncome = moneyFormatter(income);
    const formattedExpense = moneyFormatter(expense);

    return { formattedIncome, formattedExpense };
}
