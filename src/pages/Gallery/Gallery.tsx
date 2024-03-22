/* eslint-disable */
import React, { useState, useEffect, FC, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import { LanguageContext } from "../../context";

import NotesImg from "../../assets/converted/Notes.webp";
import QuizImg from "../../assets/converted/quiz.webp";
import NewsImg from "../../assets/converted/Request.webp";
import CrmImg from "../../assets/converted/orders.webp";
import TableImg from "../../assets/converted/test-progect.webp";
import HotelImg from "../../assets/converted/Hotel.webp";
import ChartImg from "../../assets/converted/Providers.webp";
import DeliveryImg from "../../assets/original/delivery.jpg"

import PopoverWrap from "../../components/Popover/PopoverWrap";

import "./gallery.scss";

const Galery: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();
  const language = useContext(LanguageContext);

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(2));
    };

    return handleUnmount;
  }, [dispatch]);

  const [pageAnimStyle, setPageAnimStyle] = useState("");

  const indexPage = 2;

  useEffect(() => {
    setPageAnimStyle(setPageAnimation("galery", indexPage, indexPrevPage));
  }, [indexPrevPage]);

  return (
    <div className={pageAnimStyle}>
      {language === "ua" ? (
        <h2>Freelance проєкти</h2>
      ) : (
        <h2>Freelance projects</h2>
      )}

      <div className="freelance_projects">
      <PopoverWrap content={["React", "Redux", "Node.js", "MongoDB", "Express", "JWT"]}>
          <div className="project_item">
            {" "}
            <a
              href="https://sovkusom.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={DeliveryImg} alt="delivery-img" />
            </a>
          </div>
        </PopoverWrap>

      </div>
      {language === "ua" ? (
        <h2>Випускні роботи DevEducation</h2>
      ) : (
        <h2>Graduation works DevEducation</h2>
      )}

      <div className="devEducation_projects">
        <PopoverWrap content={["React", "Bootstrap", "Firebase", "Netlify"]}>
          <div className="project_item">
            {" "}
            <a
              href="https://network-requst.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
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
              rel="noreferrer"
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
              rel="noreferrer"
            >
              <img src={QuizImg} alt="quiz-img" />
            </a>
          </div>
        </PopoverWrap>
      </div>
      {language === "ua" ? <h2>Тестові завдання</h2> : <h2>Test tasks</h2>}
      <div className="test_projects">
        <PopoverWrap content={["React", "Redux", "IndexedDB", "GitHub Pages"]}>
          <div className="project_item">
            <a
              href="https://anatolii1996.github.io/notes/#/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NotesImg} alt="notes-img" />
            </a>
          </div>
        </PopoverWrap>

        <PopoverWrap content={["React", "Ant Design", "Netlify"]}>
          <div className="project_item">
            <a
              href="https://magical-rabanadas-39232e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={CrmImg} alt="crm-img" />
            </a>
          </div>
        </PopoverWrap>

        <PopoverWrap content={["React", "Ant Design", "GitHub Pages"]}>
          <div className="project_item">
            <a
              href="https://anatolii1996.github.io/test-project/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TableImg} alt="crm-img" />
            </a>
          </div>
        </PopoverWrap>

        <PopoverWrap content={["JavaScript", "Chart.js", "Netlify"]}>
          <div className="project_item">
            <a
              href="https://lovely-platypus-eb2746.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ChartImg} alt="crm-img" />
            </a>
          </div>
        </PopoverWrap>
      </div>
    </div>
  );
};

export default Galery;
