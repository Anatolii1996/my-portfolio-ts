import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderWrap from "./components/Header/HeaderWrap";
import Feedback from "./pages/Feedback/Feedback";
import "animate.css";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Galery from "./pages/Galery/Galery";
import Technical from "./pages/Technical/Technical";

const App: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<HeaderWrap />}>
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<Home/>} /> 
          <Route path="/galery" element={<Galery/>} /> 
          <Route path="/technical" element={<Technical/>} /> 
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
