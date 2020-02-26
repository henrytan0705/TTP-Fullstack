import * as TransactionAPIUtil from '../utils/transactions_util.js';

export const RETRIEVE_TRANSACTIONS = "RETRIEVE_TRANSACTIONS";

export const fetchTransactions = data => {
    return({
        type: RETRIEVE_TRANSACTIONS,
        data
    })
}

////////////////////THUNK ACTIONS////////////////////


export const retrieveTransactions = id => dispatch => {
    return TransactionAPIUtil.fetchTransactions(id)
        .then(res => dispatch(fetchTransactions(res)))
}