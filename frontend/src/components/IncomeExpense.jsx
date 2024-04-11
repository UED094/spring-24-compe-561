import { useGetTransactions } from '../hooks/useGetTransactions';
import { calculateIncomeExpense } from '../utils/helpers';

const IncomeExpense = () => {
    const { data: transactions, error, isLoading } = useGetTransactions();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Some error happened</p>;

    const { formattedIncome: income, formattedExpense: expense } =
        calculateIncomeExpense(transactions);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus" id="money-plus">
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus" id="money-minus">
                    {expense}
                </p>
            </div>
        </div>
    );
};
export default IncomeExpense;
