import { US_LOGIN } from "../constants/CyberBugConstants";

let usLogin = {};

if (localStorage.getItem('user_login')) {
    usLogin = JSON.parse(localStorage.getItem('user_login'));
}


const initialState = {
    userLogin: usLogin
}

export const UserCyberBugReducer = (state = initialState, action) => {
    switch (action.type) {
        case US_LOGIN:
            state.userLogin = action.userLogin
            return {...state }

        default:
            return {...state }
    }
}