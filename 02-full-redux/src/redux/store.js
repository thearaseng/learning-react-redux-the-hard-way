import {createStore} from "redux";
import countReducer from "./count-reducer";

export default createStore(countReducer);