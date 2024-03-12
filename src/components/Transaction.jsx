import PropTypes from "prop-types";
import { moneyFormatter } from "../utils/formatter";
const Transaction = ({ transaction }) => {
	const sign = transaction.amount < 0 ? "-" : "+";
	const borderClass = sign === "+" ? "plus" : "minus";

	return (
		<>
			<li className={borderClass}>
				{transaction.description}
				<span>
					{`${sign}${moneyFormatter(Math.abs(transaction.amount))}`}
				</span>
				<button className="delete-btn">X</button>
			</li>
		</>
	);
};

Transaction.propTypes = {
	transaction: PropTypes.object.isRequired,
};
export default Transaction;
