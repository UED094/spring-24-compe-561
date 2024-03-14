import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { moneyFormatter } from "../utils/formatter";

const IncomeExpense = () => {
	const { transactions } = useContext(TransactionContext);

	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0);

	const expense =
		amounts
			.filter((item) => item < 0)
			.reduce((acc, item) => (acc += item), 0) * -1;

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p
					className="money plus"
					id="money-plus"
				>
					{moneyFormatter(income)}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p
					className="money minus"
					id="money-minus"
				>
					{moneyFormatter(expense)}
				</p>
			</div>
		</div>
	);
};
export default IncomeExpense;
