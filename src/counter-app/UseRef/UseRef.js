import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  function inputHandler() {
    console.log("Function Call");
    
    inputRef.current.style.fontWeight = "bold";
    inputRef.current.style.fontSize = "large";
  }

  return (
    <div>
      <h1>useRef Hook</h1>
      <input type="text" ref={inputRef} />
      <button onClick={inputHandler}>Click me</button>
    </div>
  );
};

export default UseRef;
