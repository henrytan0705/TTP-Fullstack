import { RECEIVE_CURRENT_USER, LOGOUT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import { merge } from 'lodash'

const _nullSession = {
    id: null
}

const sessionsReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const { user } = action;
            return merge({}, { ["userId"]: user.id });
        case LOGOUT_USER:
            return _nullSession;
        case RECEIVE_ERRORS:
            return merge({}, state, { session: action.errors })
        default:
            return state;
    }
}

export default sessionsReducer;