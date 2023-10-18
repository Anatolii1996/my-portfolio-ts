import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderWrap />}>
          <Route path="/feedback" element={<Feedback/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
