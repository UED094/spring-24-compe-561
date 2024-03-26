import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
	const { addTransaction } = useContext(TransactionContext);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const description = e.target.description.value;
		const amount = e.target.amount.value;
		const id = uuidv4();
		const newTransaction = {
			id,
			description,
			amount: +amount,
		};

		addTransaction(newTransaction);

		e.target.description.value = "";
		e.target.amount.value = "";
	};

	return (
		<>
			<h3> Add new transaction</h3>

			<form
				id="form"
				onSubmit={handleSubmit}
			>
				<div className="form-control">
					<label htmlFor="description"> Description</label>
					<input
						id="description"
						placeholder="Enter description..."
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="amount">
						Amount <br />
					</label>
					<input
						id="amount"
						placeholder="Enter amount..."
						type="number"
					/>
				</div>

				<button className="btn"> Add Transaction</button>
			</form>
		</>
	);
};

export default AddTransaction;
