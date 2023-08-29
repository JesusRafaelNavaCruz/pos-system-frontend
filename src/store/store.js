import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./Reducers/userReducers";

const rootReducer = combineReducers({
    user: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
