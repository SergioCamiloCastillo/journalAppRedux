import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducers";
const composeEnchancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({ auth: authReducer,ui:uiReducer });
export const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunk))
);
