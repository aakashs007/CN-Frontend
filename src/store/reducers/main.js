import { act } from 'react-dom/test-utils';
import {
    AUTH_USER_ERROR, AUTH_USER_SUCCESS, AUTH_USER_PENDING
}
from '../actions/main';

const initialState = {
    user_auth_pending: true,
    error: null,
    doubts: [],
    ta_report: []
};

const mainReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case AUTH_USER_PENDING:
            return { ...state, user_auth_pending: true };
        case AUTH_USER_ERROR:
            return { user_auth_pending: true };
        case AUTH_USER_SUCCESS:
            return { user_auth_pending: false };
        default:
            return { ...initialState };
    }
}

export default mainReducer;