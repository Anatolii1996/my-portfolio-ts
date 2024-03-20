/* eslint-disable */
import React, { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "animate.css";
import NotFound from "./pages/NotFound/NotFound";
import LayoutWrap from "./components/Layout/LayoutWrap";
import Home from "./pages/Home/Home";
import Galery from "./pages/Gallery/Gallery";
import Technical from "./pages/Technical/Technical";
import NoAcces from "./pages/NoAcces/NoAcces";

const App: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="noAccess" element={<NoAcces />}/>
      <Route path="/" element={<LayoutWrap />}>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/technical" element={<Technical />} />
       
      </Route>
    </Routes>
  );
};

export default App;
