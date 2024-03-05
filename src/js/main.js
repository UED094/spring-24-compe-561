import "../css/style.css";

const balance = document.querySelector("#balance");
const money_plus = document.querySelector("#money-plus");
const money_minus = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const form = document.querySelector("#form");
const description = document.querySelector("#description");
const amount = document.querySelector("#amount");

const dummyTransactions = [
	{ id: 1, description: "Flower", amount: -20 },
	{ id: 2, description: "Salary", amount: 300 },
	{ id: 3, description: "Book", amount: -10 },
	{ id: 4, description: "Camera", amount: 150 },
];

const MAX_ID_NUMBER = 100000000;

function init() {
	list.innerHTML = "";
	dummyTransactions.forEach(addTransactionDOM);
	updateValues();
}

function addTransaction(e) {
	e.preventDefault();

	const descriptionValue = description.value.trim();
	const amountValue = amount.value.trim();

	if (descriptionValue === "" || amountValue === "") {
		alert("Please add a description and amount");
	} else {
		const transaction = {
			id: generateID(),
			description: description.value,
			amount: +amount.value,
		};

		dummyTransactions.push(transaction);

		addTransactionDOM(transaction);
		updateValues();

		description.value = "";
		amount.value = "";
	}
}

const generateID = () => Math.floor(Math.random() * MAX_ID_NUMBER);

// Remove transaction by ID
function removeTransaction(id) {
	// Find the index of the transaction with the specified ID
	const indexToRemove = dummyTransactions.findIndex(
		(transaction) => transaction.id === id
	);

	// Check if the transaction with the specified ID was found
	if (indexToRemove !== -1) {
		// Use splice to remove the transaction at the found index
		dummyTransactions.splice(indexToRemove, 1);
		init();
	}
}

function addTransactionDOM(transaction) {
	const sign = transaction.amount < 0 ? "-" : "+";

	const item = document.createElement("li");

	item.classList.add(transaction.amount < 0 ? "minus" : "plus");

	const delete_btn = document.createElement("button");
	delete_btn.classList.add("delete-btn");
	delete_btn.innerHTML = "x";
	delete_btn.onclick = () => removeTransaction(transaction.id);

	item.innerHTML = `
    ${transaction.description} <span>${sign}${Math.abs(
		transaction.amount
	)}</span>
    `;

	// Add the delete button to the list item
	item.appendChild(delete_btn);

	// Add the transaction to the list
	list.appendChild(item);
}

function updateValues() {
	const calculateTotal = (acc, item) => acc + item;

	const amounts = dummyTransactions.map((transaction) => transaction.amount);

	const total = amounts.reduce(calculateTotal, 0).toFixed(2);

	const income = amounts
		.filter((item) => item > 0)
		.reduce(calculateTotal, 0)
		.toFixed(2);

	const expense = (
		amounts.filter((item) => item < 0).reduce(calculateTotal, 0) * -1
	).toFixed(2);

	balance.innerText = `$${total}`;
	money_plus.innerText = `$${income}`;
	money_minus.innerText = `$${expense}`;
}

init();

// Event listeners
form.addEventListener("submit", addTransaction);
