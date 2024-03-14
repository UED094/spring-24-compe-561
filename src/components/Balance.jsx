import { moneyFormatter } from "../utils/formatter";
import useTransactionContext from "../hooks/useTransactionContext";

const Balance = () => {
	const { transactions } = useTransactionContext();

	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	const totalBalance = total;
	// const totalBalance = "0.00";

	return (
		<>
			<h4> Your Balance</h4>
			<h1 id="balance"> {moneyFormatter(totalBalance)}</h1>
		</>
	);
};

export default Balance;
