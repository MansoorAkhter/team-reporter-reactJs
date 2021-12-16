import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {

    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Use Reducer Hook</h2>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Incremnet</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decremnet</button>
    </div>
  );
};

export default UseReducer;
