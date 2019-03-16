import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER, LOGOUT } from '../actions/auth/type';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            const { token } = action;
            const payload = jwt.decode(token);
            return payload.user || null;
        }
        case LOGOUT: {
            return null;
        }
        default:
            return state;
    }
};