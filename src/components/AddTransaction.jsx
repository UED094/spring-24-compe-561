const AddTransaction = () => {
	return (
		<>
			<h3> Add new transaction</h3>

			<form id="form">
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
