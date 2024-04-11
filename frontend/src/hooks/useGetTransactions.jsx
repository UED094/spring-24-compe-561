import { getTransactions } from '../api/transactionApi';
import { useQuery } from '@tanstack/react-query';

export const useGetTransactions = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => getTransactions(),
    });

    return {
        data,
        error,
        isLoading,
    };
};
