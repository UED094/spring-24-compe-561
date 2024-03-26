import Transaction from "./Transaction";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useEffect } from "react";

const History = () => {
	// const { transactions } = useContext(TransactionContext);

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:5001/transactions");
			const data = await response.json();

			setTransactions(data);
		};

		fetchData();
	}, []);

	console.log("transactions", transactions);

	return (
		<>
			<h3> History</h3>
			<ul
				className="list"
				id="list"
			>
				{transactions.map((transaction) => (
					<Transaction
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			</ul>
		</>
	);
};

export default History;
