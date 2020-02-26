import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';
import transactionsReducer from './transactions_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    searchedStock: stockReducer,
    transactions: transactionsReducer
})

export default entitiesReducer;