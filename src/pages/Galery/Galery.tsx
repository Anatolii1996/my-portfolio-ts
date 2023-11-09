import React, { useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";

const Galery:FC = () => {
  const [indexPage] = useState(2);
  return <div>Galery</div>;
};

export default Galery;
