import {useRef, useState} from "react";
import store from "../../redux/store";
import {createDecrementAction, createIncrementAction} from "../../redux/count-action";

export default function Count() {

  const selectRef = useRef();

  const increase = () => {
    store.dispatch(createIncrementAction((selectRef.current.value * 1)));
  }

  const decrease = () => {
    store.dispatch(createDecrementAction((selectRef.current.value * 1)));
  }

  const increaseIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction((selectRef.current.value * 1)));
    }
  }

  const increaseAsync = () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction((selectRef.current.value * 1)));
    }, 1000);
  }

  return (
    <div>
      <h1>Count: {store.getState()}</h1>
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;&nbsp;
      <button onClick={increase}>Increase</button> &nbsp;&nbsp;
      <button onClick={decrease}>Decrease</button> &nbsp;&nbsp;
      <button onClick={increaseIfOdd}>Increase If Odd</button> &nbsp;&nbsp;
      <button onClick={increaseAsync}>Increase Async</button> &nbsp;&nbsp;
    </div>
  );
}