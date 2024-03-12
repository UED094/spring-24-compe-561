export function moneyFormatter(num) {
	const formattedNum = Math.abs(num).toFixed(2);

	const [integerPart, decimalPart] = formattedNum.split(".");

	const currencySymbol = num < 0 ? "-$" : "$";

	const formattedIntegerPart = integerPart.replace(
		/(\d)(?=(\d{3})+(?!\d))/g,
		"$1,"
	);

	return currencySymbol + formattedIntegerPart + "." + decimalPart;
}
