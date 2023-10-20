import {applyMiddleware, createStore} from "redux";
import countReducer from "./count-reducer";
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));