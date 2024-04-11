import PropTypes from 'prop-types';
import { moneyFormatter } from '../utils/formatter';
import useDeleteTransaction from '../hooks/useDeleteTransaction';

const Transaction = ({ transaction }) => {
    const { mutate: deleteTransaction } = useDeleteTransaction();

    const handleDeleteTransaction = (id) => {
        deleteTransaction(id);
    };

    const sign = transaction.amount < 0 ? '-' : '+';
    const borderClass = sign === '+' ? 'plus' : 'minus';

    return (
        <>
            <li className={borderClass}>
                {transaction.description}
                <span>
                    {`${sign}${moneyFormatter(Math.abs(transaction.amount))}`}
                </span>
                <button
                    className="delete-btn"
                    onClick={() => {
                        handleDeleteTransaction(transaction.id);
                    }}
                >
                    X
                </button>
            </li>
        </>
    );
};

Transaction.propTypes = {
    transaction: PropTypes.object.isRequired,
};
export default Transaction;
