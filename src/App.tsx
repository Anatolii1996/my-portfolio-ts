import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderWrap />}>
        <Route path="/feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
};

export default App;
