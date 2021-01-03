import { USER_USERNAME_SET, USER_PASSWORD_SET, USER_REGISTER } from '../types';

const initialState = {
    username: '',
    password: '',
    registered: false,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_USERNAME_SET:
            return {
                ...state,
                username: payload,
            };
        case USER_PASSWORD_SET:
            return {
                ...state,
                password: payload,
            };
        case USER_REGISTER:
            return {
                ...state,
                registered: true,
            };
        default:
            return state;
    }
};

export default userReducer;
