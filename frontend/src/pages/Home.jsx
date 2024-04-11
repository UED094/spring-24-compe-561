import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import History from '../components/History';
import AddTransaction from '../components/AddTransaction';
import { TransactionProvider } from '../context/TransactionContext';

const Home = () => {
    return (
        <>
            <TransactionProvider>
                <div className="container">
                    <Balance />
                    <IncomeExpense />
                    <History />
                    <AddTransaction />
                </div>
            </TransactionProvider>
        </>
    );
};
export default Home;
