import React from "react";
import { useNavigate } from "react-router-dom";

const First = () => {
  let navigate = useNavigate();
  const firstHandler = () => {
    navigate("/second");
  };
  return (
    <div>
      <button style={{ background: "red" }} 
      onClick={firstHandler}>
        This Is First Page
      </button>
      <h1>This Is First Page</h1>

    </div>
  );
};

export default First;
