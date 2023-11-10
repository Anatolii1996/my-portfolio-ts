import React, {useState, useEffect, FC} from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";

const Technical:FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(3));
    };

    return handleUnmount;
  }, [dispatch]);
  return (
    <div>Technical</div>
  )
}

export default Technical