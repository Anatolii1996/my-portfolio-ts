import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import myPhoto from "../../assets/my-photo.png";
import ProgressWrap from "../../components/Progress/ProgressWrap";
import { Icon } from "@iconify/react";
import NestLogo from "../../assets/nestjs-icon-2048x2040-3rrvcej8.png"
import NextLogo from "../../assets/next-js-icon-512x512-zuauazrk.png"
import BunLogo from "../../assets/Bun.png"
import GSAPLogo from "../../assets/gsap-greensock.svg"
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
          <li>
            <div className="tech_name">
              <Icon icon="vscode-icons:file-type-html" />
              <p>HTML</p>
            </div>
            <ProgressWrap quantity={85} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="vscode-icons:file-type-css" />
              <p>CSS</p>
            </div>
            <ProgressWrap quantity={85} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="vscode-icons:file-type-js-official" />
              <p>JavaScript</p>
            </div>
            <ProgressWrap quantity={60} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="devicon:typescript" />
              <p>TypeScript</p>
            </div>
            <ProgressWrap quantity={30} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="devicon:react" />
              <p>React</p>
            </div>
            <ProgressWrap quantity={70} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="logos:redux" />
              <p>Redux</p>
            </div>
            <ProgressWrap quantity={50} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="logos:firebase" />
              <p>Firebase</p>
            </div>
            <ProgressWrap quantity={40} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="vscode-icons:file-type-node" />
              <p>Node.js</p>
            </div>
            <ProgressWrap quantity={30} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="skill-icons:expressjs-dark" />
              <p>Express</p>
            </div>
            <ProgressWrap quantity={30} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="vscode-icons:file-type-mongo" />
              <p>MongoDB</p>
            </div>
            <ProgressWrap quantity={40} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="logos:mysql" />
              <p>MySQL</p>
            </div>
            <ProgressWrap quantity={20} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="devicon:git" />
              <Icon icon="devicon:github" />
              <p>Git/GitHub</p>
            </div>
            <ProgressWrap quantity={30} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="logos:ant-design" />
              <p>Ant Design</p>
            </div>
            <ProgressWrap quantity={40} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="logos:sass" />
              <p>Sass</p>
            </div>
            <ProgressWrap quantity={85} />
          </li>
          <li>
            <div className="tech_name">
              <Icon icon="logos:testing-library" />
              <p>Testing library</p>
            </div>
            <ProgressWrap quantity={15} />
          </li>
        </ul>
        <h2>Технології для подальшого вивчення</h2>
        <ul>
          <li>
            {" "}
            <div className="tech_name">
           <img src={NestLogo} alt="Nest-logo" />
              <p>Nest.js</p>
            </div>
          </li>
          <li>
            {" "}
            <div className="tech_name">
            <img src={NextLogo} alt="Nest-logo" />
              <p>Next.js</p>
            </div>
          </li>
          <li>
            {" "}
            <div className="tech_name">
            <img src={BunLogo} alt="Nest-logo" />
              <p>Bun.sh</p>
            </div>
          </li>
          <li>
            {" "}
            <div className="tech_name">
            <img src={GSAPLogo} alt="Nest-logo" />
              <p>GSAP</p>
            </div>
          </li>
          <li>
            {" "}
            <div className="tech_name">
            <Icon icon="devicon:storybook" />
              <p>Storybook</p>
            </div>
          </li>
          <li>
            {" "}
            <div className="tech_name">
            <Icon icon="vscode-icons:file-type-eslint2" />
              <p>Eslint</p>
            </div>
          </li>
        </ul>
      </div>
      <img className="my_photo" src={myPhoto} alt="my-photo" />
    </div>
  );
};

export default Home;
