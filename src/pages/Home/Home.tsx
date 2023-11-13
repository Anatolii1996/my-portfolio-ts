import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import myPhoto from "../../assets/my-photo.png";
import ProgressWrap from "../../components/Progress/ProgressWrap";
import "./home.scss";

const Home: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(1));
    };

    return handleUnmount;
  }, [dispatch]);

  const [pageAnimStyle, setPageAnimStyle] = useState("");
  useEffect(() => {
    setPageAnimStyle(setPageAnimation("home", 1, indexPrevPage));
  }, [indexPrevPage]);

  return (
    <div className={pageAnimStyle}>
      <div className="description">
        <h1>Всім привіт!</h1>
        <h2>Давайте знайомитись</h2>
        <h3>Стек технологій</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git/GitHub</li>
          <li>Ant Design</li>
          <li>Sass</li>
        </ul>
        <ProgressWrap/>
      </div>
      <img src={myPhoto} alt="my-photo" />
    </div>
  );
};

export default Home;
