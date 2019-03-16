import axios from 'axios';
import { SET_CURRENT_USER, LOGOUT } from './type';
import setAuthToken from '../../utilities/setAuthToken';

export const setCurrentUser = (token) => ({
    type: SET_CURRENT_USER,
    token
});

export const signIn = (user) =>
    dispatch =>
        axios.post('/api/signin', user)
            .then((res) => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                dispatch(setCurrentUser(token));
                return token;
            });

export const logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthToken();
    return {
        type: LOGOUT
    };
};
