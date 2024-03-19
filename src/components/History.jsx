import Transaction from "./Transaction";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const History = () => {
	const { transactions } = useContext(TransactionContext);

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
