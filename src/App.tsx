import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";
import Feedback from "./pages/Feedback/Feedback";
import "animate.css";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

const App: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<HeaderWrap />}>
        <Route path="/" element={<Footer />}>
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
