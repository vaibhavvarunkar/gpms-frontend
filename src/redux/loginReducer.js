import { SET_USER_LOGIN_STATUS } from "./loginActions"

const initialState = {
    loginStatus: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.payload
            }
        default: return state
    }
}

export default loginReducer