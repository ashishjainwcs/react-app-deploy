import { combineReducers,compose } from "redux";


import { createStore } from "redux";
import { storeReducer } from "../redux.reducer/store.reducer";
import {productReducer} from "../redux.reducer/product.reducer";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
   storeReducer,
   productReducer

});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);



//let store = createStore(storeReducer);

/*
let store = createStore({
    reducer: storeReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV === "development" ? true : false
})
    */

export default store;