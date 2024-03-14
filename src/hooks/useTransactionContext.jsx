import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const useTransactionContext = () => {
	const context = useContext(TransactionContext);
	return context;
};
export default useTransactionContext;
