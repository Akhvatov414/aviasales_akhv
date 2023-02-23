import stopReducer from "./reducers/stopReducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import filterReducer from "./reducers/filterReducer";
import ticketsReducer from "./reducers/ticketReducer";
import loadingStatusReducer from "./reducers/loadingStatusReducer";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const reducerList = combineReducers({
    stop: stopReducer,
    filter: filterReducer,
    tickets: ticketsReducer,
    loadingStatus: loadingStatusReducer,
});

const store = createStore(reducerList, composeEnhancers(applyMiddleware(thunk)));

export default store;