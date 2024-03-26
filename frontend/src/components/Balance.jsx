import { moneyFormatter } from "../utils/formatter";
import useTransactionContext from "../hooks/useTransactionContext";
import { useEffect, useState } from "react";
const Balance = () => {
	// const { transactions } = useTransactionContext();

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:5001/transactions");
			const data = await response.json();

			setTransactions(data);
		};

		fetchData();
	}, []);

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
