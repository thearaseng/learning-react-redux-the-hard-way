import {DECREMENT, INCREMENT} from "./constants";

const initialState = 0;

export default function countReducer(prevState = initialState, action) {

  console.log(prevState, action);

  const {type, data} = action;

  switch (type) {
    case INCREMENT:
      return prevState + data;
    case DECREMENT:
      return prevState - data;
    default:
      return prevState;
  }

}