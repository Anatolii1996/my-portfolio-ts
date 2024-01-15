/* eslint-disable */
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "animate.css";
import NotFound from "./pages/NotFound/NotFound";
import LayoutWrap from "./components/Layout/LayoutWrap";
import Home from "./pages/Home/Home";
import Galery from "./pages/Gallery/Gallery";
import Technical from "./pages/Technical/Technical";
import Feedback from "./pages/Feedback/Feedback";
import NoAcces from "./pages/NoAcces/NoAcces";

const App: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="noAccess" element={<NoAcces />}/>
      <Route path="/" element={<LayoutWrap />}>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/feedback" element={<Feedback />} />
       
      </Route>
    </Routes>
  );
};

export default App;
