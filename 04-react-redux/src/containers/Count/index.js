import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count-action";
import {useRef} from "react";

function CountUI(props) {

  const {count, add, substract, addAsync} = props;

  const selectRef = useRef();

  const increase = () => {
    add(selectRef.current.value * 1);
  }

  const decrease = () => {
    substract(selectRef.current.value * 1);
  }

  const increaseIfOdd = () => {
    if (count % 2 !== 0) {
      add(selectRef.current.value * 1);
    }
  }

  const increaseAsync = () => {
    addAsync(selectRef.current.value * 1, 1000);
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

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (data) => dispatch(createIncrementAction(data)),
//     substract: (data) => dispatch(createDecrementAction(data)),
//     addAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
//   }
// }

// It's the same as the above code
const mapDispatchToProps = {
  add: createIncrementAction,
  substract: createDecrementAction,
  addAsync: createIncrementAsyncAction
}

const CountContainer = connect(
  mapStateToProps, mapDispatchToProps
)(CountUI);

export default CountContainer;