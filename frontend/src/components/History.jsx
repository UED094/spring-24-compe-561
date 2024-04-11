import Transaction from './Transaction';
import { useGetTransactions } from '../hooks/useGetTransactions';

const History = () => {
    const { data: transactions, error, isLoading } = useGetTransactions();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Some error happened</p>;

    return (
        <>
            <h3> History</h3>
            <ul className="list" id="list">
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </>
    );
};

export default History;
