import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Menu from "./Menu";

function MainRouter() {
  const Name = () => {
    return <h1>This is name component</h1>;
  };
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/name" element={<Name />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
