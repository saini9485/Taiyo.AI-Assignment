import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import contactReducer from "./reducers/contactReducer";
import dummyReducer from "./reducers/dummyReducer";
import graphReducer from "./reducers/graphReducer";

const combinedReducers = combineReducers({
  contacts: contactReducer,
  dummy: dummyReducer,
  graphs: graphReducer,
});

const store = legacy_createStore(combinedReducers, applyMiddleware(logger));

export default store;