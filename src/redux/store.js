import { createStore, combineReducers } from "redux"
import loginReducer from "./loginReducer"

const rootReducer = combineReducers({
    login: loginReducer
})

const store = createStore(rootReducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store