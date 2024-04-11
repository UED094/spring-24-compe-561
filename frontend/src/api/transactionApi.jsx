import { API_URL } from '../utils/constants';

export const getTransactions = async () => {
    const response = await fetch(`${API_URL}/transactions`);
    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 4000));

    return data;
};

export const addTransaction = async (newTransaction) => {
    const response = await fetch(`${API_URL}/transactions/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
    });

    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 4000));

    return data;
};

export const deleteTransaction = async (id) => {
    return await fetch(`${API_URL}/transactions/${id}/`, {
        method: 'DELETE',
    });
};

export const updateTransaction = async (updatedTransaction) => {
    const response = await fetch(
        `${API_URL}/transactions/${updatedTransaction.id}/`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTransaction),
        }
    );

    const data = await response.json();
    return data;
};
