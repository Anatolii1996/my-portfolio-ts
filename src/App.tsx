import React, {FC} from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";
import Feedback from "./pages/Feedback";
import "animate.css";

const App:FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderWrap />}>
        <Route path="/feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
};

export default App;
