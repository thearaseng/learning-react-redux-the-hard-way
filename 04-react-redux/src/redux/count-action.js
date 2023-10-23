import {DECREMENT, INCREMENT} from "./constants";

export const createIncrementAction = (data) => {
  return {type: INCREMENT, data};
}

export const createDecrementAction = (data) => ({type: DECREMENT, data});

export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  }
}