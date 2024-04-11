import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTransaction } from '../api/transactionApi';

export const useAddTransaction = () => {
    const QueryKey = ['transactions'];

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newTransaction) => addTransaction(newTransaction),
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKey);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
