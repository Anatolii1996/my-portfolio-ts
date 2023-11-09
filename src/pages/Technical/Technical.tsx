import React, {useState, FC} from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";

const Technical:FC = () => {
    const [indexPage] = useState(3);
  return (
    <div>Technical</div>
  )
}

export default Technical