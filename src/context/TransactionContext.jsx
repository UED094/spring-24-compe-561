import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
	const localTransactions = getLocalStorage("transactions")
		? getLocalStorage("transactions")
		: [];

	const [transactions, setTransactions] = useState(localTransactions);

	const addTransaction = (newTransaction) => {
		const updatedTransactions = [...transactions, newTransaction];
		setTransactions(updatedTransactions);
		updateLocalStorage("transactions", updatedTransactions);
	};

	return (
		<TransactionContext.Provider value={{ transactions, addTransaction }}>
			{children}
		</TransactionContext.Provider>
	);
};

TransactionProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
