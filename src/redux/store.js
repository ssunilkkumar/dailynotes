import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./todo/reducer";


const composeEnhancers = 
    (typeof window !== 'undefined' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
        compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)


export const store = createStore(
    reducer,
    enhancer
    );

