import {DECREMENT, INCREMENT} from "./constants";

export const createIncrementAction = (data) => {
  return {type: INCREMENT, data};
}

export const createDecrementAction = (data) => ({type: DECREMENT, data});