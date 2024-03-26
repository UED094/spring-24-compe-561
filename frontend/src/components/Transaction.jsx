import PropTypes from "prop-types";
import { moneyFormatter } from "../utils/formatter";
import useTransactionContext from "../hooks/useTransactionContext";
const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useTransactionContext();

	const handleDeleteTransaction = (id) => {
		console.log("handleDeleteTransaction clicked");
		console.log(id);
		deleteTransaction(id);
	};

	const sign = transaction.amount < 0 ? "-" : "+";
	const borderClass = sign === "+" ? "plus" : "minus";

	return (
		<>
			<li className={borderClass}>
				{transaction.description}
				<span>
					{`${sign}${moneyFormatter(Math.abs(transaction.amount))}`}
				</span>
				<button
					className="delete-btn"
					onClick={() => {
						handleDeleteTransaction(transaction.id);
					}}
				>
					X
				</button>
			</li>
		</>
	);
};

Transaction.propTypes = {
	transaction: PropTypes.object.isRequired,
};
export default Transaction;
