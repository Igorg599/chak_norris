import { createStore, compose } from "redux";

import rootReducer from "./reducers";

const composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;