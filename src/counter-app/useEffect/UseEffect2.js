import React, { useState, useEffect } from "react";

const WidthFinder = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
      console.log("add event")
    window.addEventListener("resize", actualWidth);

    return () => {
        console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  });s

  return (
    <div>
      <h2>The actual szie of the window is:</h2>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default WidthFinder;
