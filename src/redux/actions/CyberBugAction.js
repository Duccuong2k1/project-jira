import { USER_SIGN_API } from "../constants/CyberBugConstants"

export const signInCyberBugSaga = (email, password, history) => {
    return {

        type: USER_SIGN_API,
        userLogin: {
            email: email,
            password: password,
            history: history
        }
    }
}