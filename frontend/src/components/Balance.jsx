import { moneyFormatter } from '../utils/formatter';

import { useGetTransactions } from '../hooks/useGetTransactions';
import { getTotalBalance } from '../utils/helpers';

const Balance = () => {
    const { data: transactions, error, isLoading } = useGetTransactions();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Some Error happened </p>;

    const totalBalance = getTotalBalance(transactions);

    return (
        <div style={{ textAlign: 'center' }}>
            <h4> Your Balance</h4>
            <h1 id="balance"> {moneyFormatter(totalBalance)}</h1>
        </div>
    );
};

export default Balance;
