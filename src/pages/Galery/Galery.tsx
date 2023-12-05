import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import NotesImg from "../../assets/Notes.jpg";
import QuizImg from "../../assets/quiz.jpg";
import NewsImg from "../../assets/Request.jpg";
import CrmImg from "../../assets/orders.jpg";
import TableImg from "../../assets/test-progect.jpg";
import HotelImg from "../../assets/Hotel.jpg";
import PopoverWrap from "../../components/Popover/PopoverWrap";
import "./galery.scss";

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
        <PopoverWrap content={["React", "Bootstrap", "Firebase", "Netlify"]}>
          <div className="project_item">
            {" "}
            <a href="https://network-requst.netlify.app/" target="_blank">
              <img src={NewsImg} alt="news-img" />
            </a>
          </div>
        </PopoverWrap>
        <PopoverWrap
          content={["React", "Redux", "Redux-Saga", "Firebase", "Netlify"]}
          comment={["Username - user1", "Password - pass1"]}
        >
          <div className="project_item">
            {" "}
            <a
              href="https://lustrous-kataifi-f520ba.netlify.app/"
              target="_blank"
            >
              <img src={HotelImg} alt="hotel-img" />
            </a>
          </div>
        </PopoverWrap>
        <PopoverWrap content={["React", "Redux", "Firebase", "Netlify"]}>
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
      <div className="test_projects">
        <PopoverWrap content={["React", "Redux", "IndexedDB", "GitHub Pages"]}>
          <div className="project_item">
            <a href="https://anatolii1996.github.io/notes/#/" target="_blank">
              <img src={NotesImg} alt="notes-img" />
            </a>
          </div>
        </PopoverWrap>

        <PopoverWrap content={["React", "Redux",  "Netlify"]}>
          <div className="project_item">
            <a
              href="https://magical-rabanadas-39232e.netlify.app/"
              target="_blank"
            >
              <img src={CrmImg} alt="crm-img" />
            </a>
          </div>
        </PopoverWrap>

        <PopoverWrap content={["React", "Ant Design",  "GitHub Pages"]}>
          <div className="project_item">
            <a
              href="https://anatolii1996.github.io/test-project/"
              target="_blank"
            >
              <img src={TableImg} alt="crm-img" />
            </a>
          </div>
        </PopoverWrap>
      </div>
    </div>
  );
};

export default Galery;
