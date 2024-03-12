const History = () => {
	return (
		<>
			<h3> History</h3>
			<ul
				className="list"
				id="list"
			>
				<li className="minus">
					{" "}
					Cash <span> -400 </span>{" "}
					<button className="delete-btn">X</button>
				</li>
				<li className="plus">
					{" "}
					Cash <span> 500 </span>{" "}
					<button className="delete-btn">X</button>
				</li>
			</ul>
		</>
	);
};
export default History;
