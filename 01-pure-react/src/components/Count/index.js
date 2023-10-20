import {useRef, useState} from "react";

export default function Count() {

  const [count, setCount] = useState(0);
  const selectRef = useRef();

  const increase = () => {
    setCount(count + (selectRef.current.value * 1));
  }

  const decrease = () => {
    setCount(count - (selectRef.current.value * 1));
  }

  const increaseIfOdd = () => {
    if (count % 2 !== 0) {
      setCount(count + (selectRef.current.value * 1));
    }
  }

  const increaseAsync = () => {
    setTimeout(() => {
      setCount(count + (selectRef.current.value * 1));
    }, 1000);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
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