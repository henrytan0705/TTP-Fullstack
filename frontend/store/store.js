import {createStore, applyMiddleware} from 'redux';
import rootReducer from ''
import {logger} from 'redux-logger';
import thunk from '../middlewares/thunk';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;