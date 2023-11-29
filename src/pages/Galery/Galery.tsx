import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import NotesImg from "../../assets/Notes.jpg";
import QuizImg from "../../assets/quiz.jpg";
import NewsImg from "../../assets/Request.jpg";
import HotelImg from "../../assets/Hotel.jpg";
import PopoverWrap from "../../components/Popover/PopoverWrap";
import { Button, ConfigProvider, Popover, Segmented } from 'antd';
import "./galery.scss";

const text = <span>Technologies:</span>;

const buttonWidth = 80;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Galery: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(2));
    };

    return handleUnmount;
  }, [dispatch]);

  const [pageAnimStyle, setPageAnimStyle] = useState("");
  useEffect(() => {
    setPageAnimStyle(setPageAnimation("galery", 2, indexPrevPage));
  }, [indexPrevPage]);

  return (
    <div className={pageAnimStyle}>
      <h2>Випускні роботи DevEducation</h2>
      <div className="devEducation_projects">
      <PopoverWrap content={["React", "Bootstrap"]}>
        <div className="project_item">
          {" "}
          <a href="https://network-requst.netlify.app/" target="_blank">
            <img src={NewsImg} alt="news-img" />
          </a>
        </div>
        </PopoverWrap>
        <PopoverWrap content={["React", "Bootstrap"]}>
        <div className="project_item">
          {" "}
          <a href="https://lustrous-kataifi-f520ba.netlify.app/" target="_blank">
            <img src={HotelImg} alt="hotel-img" />
          </a>
        </div>
        </PopoverWrap>
        <PopoverWrap content={["React", "Bootstrap"]}>
        <div className="project_item">
          {" "}
          <a
            href="https://illustrious-crepe-bfac6b.netlify.app/"
            target="_blank"
          >
            <img src={QuizImg} alt="quiz-img" />
          </a>
        </div>
        </PopoverWrap>
        
        
        
      </div>
      <h2>Тестові завдання</h2>
      <div>
        <div className="project_item">
          <a href="https://anatolii1996.github.io/notes/#/" target="_blank">
            <img src={NotesImg} alt="notes-img" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Galery;
