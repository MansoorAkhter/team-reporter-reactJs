import React from "react";
import { useNavigate } from "react-router-dom";

const Second = () => {
  let navigate = useNavigate();

  const secondHandler = () => {
    navigate("/third");
  };

  return (
    <div>
      <button style={{ background: "green" }} onClick={secondHandler}>
        This Is Second Page
      </button>
      <h1>This Is Second Page</h1>
    </div>
  );
};

export default Second;
