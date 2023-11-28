import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import NotesImg from "../../assets/Notes.jpg"
import QuizImg from "../../assets/quiz.jpg"
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
        <div className="project_item">
          <a href="https://anatolii1996.github.io/notes/#/" target="_blank">
            <img src={NotesImg} alt="notes-img" />
          </a>
        </div>
        <div className="project_item">
          {" "}
          <a href="https://illustrious-crepe-bfac6b.netlify.app/" target="_blank">
            <img src={QuizImg} alt="quiz-img" />
          </a>
        </div>
        <div className="project_item">
          {" "}
          <a href="" target="_blank">
            <img src="" alt="" />
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default Galery;
