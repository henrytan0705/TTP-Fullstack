import { RETRIEVE_TRANSACTIONS } from '../actions/transaction_actions';

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RETRIEVE_TRANSACTIONS:
        // debugger
            state = [];
            return state.concat(action.data.owned_stocks)
        default:
            return state;
    }
}

export default transactionsReducer;