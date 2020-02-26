export const fetchTransactions = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/stocks/${id}`
    })
}