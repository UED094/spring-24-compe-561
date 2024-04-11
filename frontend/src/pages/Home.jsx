import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import History from '../components/History';
import AddTransaction from '../components/AddTransaction';

const Home = () => {
    return (
        <>
            <div className="container">
                <Balance />
                <IncomeExpense />
                <History />
                <AddTransaction />
            </div>
        </>
    );
};
export default Home;
