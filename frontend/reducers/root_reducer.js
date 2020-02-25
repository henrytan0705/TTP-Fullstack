import { combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
import errorReducer from './errors_reducer';

const rootReducer = combineReducers({
    session: sessionsReducer,
    errors: errorReducer
});

export default rootReducer;