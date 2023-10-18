import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderWrap />}>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
