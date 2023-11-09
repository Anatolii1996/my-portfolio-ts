import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";


const Home: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

// useEffect(()=>{
// console.log(indexPage)
// console.log(typeof indexPage)
// }, [])

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(1));
    };

    return handleUnmount;
  }, [ dispatch]);

  return <div>Home</div>;
};

export default Home;
