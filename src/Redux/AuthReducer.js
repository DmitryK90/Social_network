const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data, // дуструкт.экшена.
                isAuth: true,
            };
        }
        default:
            return {
                ...state
            }
    }
}

export const SetAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });

export default AuthReducer;