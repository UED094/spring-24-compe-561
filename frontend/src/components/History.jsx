import Transaction from "./Transaction";
import { useState } from "react";
import { API_URL } from "../utils/constants";
import { useEffect } from "react";

const History = () => {
	// const { transactions } = useContext(TransactionContext);

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${API_URL}/transactions/`);
			const data = await response.json();

			console.log(data);

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
