import { SET_USER_LOGIN_STATUS } from "./loginActions"

export const setUserLoginStatus = loginStatus => {
    return {
        type: SET_USER_LOGIN_STATUS,
        payload: loginStatus
    }
}