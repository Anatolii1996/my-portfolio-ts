import React, {useState, useEffect, FC} from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import cn from "classnames";

const Technical:FC = () => {
  const [indexPage] = useState(3);
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(indexPage));
    };

    return handleUnmount;
  }, [dispatch]);

  const pageAnimClasses = cn("page_wrap tech_page", {
    // Используем classNames для условных классов
    "animate__animated animate__fadeInRightBig": indexPage > indexPrevPage,
    "animate__animated animate__fadeInLeftBig": indexPage <= indexPrevPage,
  });

  return (
    <div className={pageAnimClasses} >Technical</div>
  )
}

export default Technical