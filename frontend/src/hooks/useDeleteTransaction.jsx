import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTransaction } from '../api/transactionApi';

const useDeleteTransaction = () => {
    const QueryKey = ['transactions'];

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteTransaction(id),
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKey);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
export default useDeleteTransaction;
