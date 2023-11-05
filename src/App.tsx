import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";
import Feedback from "./pages/Feedback";
import "animate.css";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderWrap />}>
        <Route path="/" element={<Footer />}>
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
