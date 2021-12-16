import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./store/counterSlice";

const Counter = () => {
  const countSelector = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h2>Counter {countSelector}</h2>
      <div>
        <Button style={{ fontWeight: "bold" }} onClick={incrementCounter}>
          Increment </Button>
          
        <Button style={{ fontWeight: "bold" }} onClick={decrementCounter}>
          Decrement </Button>

        <Button style={{ fontWeight: "bold" }}
          onClick={() => dispatch(incrementByAmount(15))}>+ by amount</Button>

        <Button style={{ fontWeight: "bold" }}
          onClick={() => dispatch(decrementByAmount(5))}>- by amount</Button>
      </div>
    </div>
  );
};

export default Counter;
