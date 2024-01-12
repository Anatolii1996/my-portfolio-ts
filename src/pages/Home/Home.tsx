import React, { useState, useEffect, FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import { Icon } from "@iconify/react";
import { LanguageContext } from "../../context";

import ProgressWrap from "../../components/Progress/ProgressWrap";
import ImgWrap from "../../components/Images/ImgWrap";

import NestLogo from "../../assets/nestjs-icon-2048x2040-3rrvcej8.png";
import NextLogo from "../../assets/next-js-icon-512x512-zuauazrk.png";
import BunLogo from "../../assets/Bun.png";
import GSAPLogo from "../../assets/gsap-greensock.svg";
import myPhoto from "../../assets/my-photo.png";
import BootstrapSert from "../../assets/Bootstrap certificate.jpg";
import DevEducationSert from "../../assets/DevEducation.jpg";
import JsSert from "../../assets/JS certificate.jpg";
import HTMLSert from "../../assets/HTML certificate.jpg";
import WebDesignSert from "../../assets/FreeCodeCamp - Web Design.jpg";
import EnglishSert from "../../assets/certificate (3).png";

import "./home.scss";

const Home: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();
  const language = useContext(LanguageContext);
  const sertificats = [
    DevEducationSert,
    JsSert,
    WebDesignSert,
    HTMLSert,
    BootstrapSert,
    EnglishSert,
  ];

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
      <div className="main_content">
        <div className="description">
          {language === "ua" ? (
            <div className="description_title">
              <h1>Вітаю кожного, хто зазирнув на мою сторінку!</h1>
              <h2>Давайте знайомитись</h2>
            </div>
          ) : (
            <div className="description_title">
              <h1>I welcome everyone who has visited my page!</h1>
              <h2>Let's get to know each other</h2>
            </div>
          )}
          {language === "ua" ? (
            <div className="description_text">
              <p>
                Мене звати Анатолій. І вже пройшло більше року, як я поринув з
                головою у світ веб-розробки.
              </p>
              <p>
                Даний ресурс є моїм Pet проектом, на якому я втілював свої ідеї,
                та прокачував свої навички.
              </p>
              <p>
                Подорожуючи по розділам, ви можете розглянути{" "}
                <Link to="/galery">портфоліо моїх робіт</Link>, детально
                ознайомитись з технічною частиною розробки даного проєкту, а також
                надати зворотній зв'язок..
              </p>
              <p>
                Дуже прошу всіх небайдужих додати мене до своїх контактів на{" "}
                <a href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127">
                  Linkedin
                </a>
                , а також підтвердити там мої навички. Буду щиро вдячний кожному,
                хто зрозуміє наскільки це важливо на етапі пошуку першої роботи
                розробника.
              </p>
              <p>
                Нижче наведено перелік моїх скромних досягнень, контактна
                інформація, а також мої плани стосовно подальшого розвитку.
              </p>
              <p>
                Окрім технологій, які я запланував освоїти найближчим часом,
                ставлю собі за мету - до кінця 2024 року підтягнути рівень
                англійської до В1.
              </p>
              <p>
                Маю ідеї стосовно розширення даного ресурсу, було би цікаво додати
                профілі більшої кількості користувачів. Тому якщо хтось із моїх
                колег, починаючих розробників/дизайнерів/тестувальників, хоче
                долучитись до спільної подальшої роботи, ласкаво прошу.
              </p>
              <p>
                Після розгортання даного ресурсу на хостингу, почну роботу над
                написанням тестів.
              </p>
              <p>
                Буду безмежно вдячний кожному хто залишить, в останньому розділі
                свою думку, стосовно даного ресурсу!
              </p>
              <h3>Попередній досвід</h3>
              <p>
                Тут я наведу кілька рядків нудної інформіції, яку зазвичай
                прийнято вказувати в резюме.
              </p>
              <p>
                В 2018 році я закінчив Криворізький національний університет, за
                спеціальністю "Збагачення корисних копалин", після чого 5 років
                працював в гірничо-добувній галузі. Зараз знайшов себе в іншій
                галузі виробництва, проте мрію працювати розробником і докладаю
                максимум зусиль для досягнення цієї мети.
              </p>
            </div>
          ) : (
            <div className="description_text">
              <p>
                My name is Anatolii. And it's been more than a year since I
                plunged into the world of web development.
              </p>
              <p>
                This resource is my Pet project, where I implemented my ideas, and
                improved my skills.
              </p>
              <p>
                Travelling through the sections, you can view
                <Link to="/galery"> the portfolio of my work</Link>, learn in
                detail get acquainted with the technical part of the development
                of this project in detail, and provide feedback.
              </p>
              <p>
                I would like to ask everyone who cares to add me to their contacts
                on{" "}
                <a href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127">
                   Linkedin
                </a>{" "}
                 and confirm my skills there. I will be sincerely grateful to
                everyone who understands how important this is when looking for a
                first job as a developer.
              </p>
              <p>
                Below you will find a list of my modest achievements, contact
                details and plans for further development.
              </p>
              <p>
                In addition to the technologies I plan to learn in the near
                future, my goal is to improve my English to B1 level by the end of
                2024.
              </p>
              <p>
                I have ideas for expanding this resource, it would be interesting
                to add profiles of more users. So, if any of my fellow aspiring
                developers/designers/testers would like to contribute to the
                future work, please feel free to do so.
              </p>
              <p>
                After the deployment of this resource on the hosting, I will start
                working on the creation of tests.
              </p>
              <p>
                I will be infinitely grateful to everyone who leaves their opinion
                in the last section of this resource!
              </p>
              <h3>Previous experience</h3>
              <p>
                Here I will give a few lines of boring information that is usually
                included in a CV.
              </p>
              <p>
                In 2018, I graduated from Kryvyi Rih National University with a
                degree in Mineral Processing, after which I worked in the mining
                industry for 5 years. Now I have found myself in a different
                industry, but my dream is to work as a developer, and I am making
                every effort to achieve this goal.
              </p>
            </div>
          )}
          {sertificats.map((el) => {
            return <ImgWrap width={500} key={el} link={el} />;
          })}
        
        </div>
        <aside>
          <img className="my_photo" src={myPhoto} alt="my_photo" />
          <div className="contacts">
            {language === "ua" ? <h3>Контакти:</h3> : <h3>Contacts:</h3>}
            <p>
              <span>Tel:</span> +38(068)777-85-90{" "}
            </p>
            <p>
              <span>Email:</span>
              <a href="mailto: anatoly.tka4enko2014@gmail.com">
                anatoly.tka4enko<br/>2014@gmail.com
              </a>
            </p>
            <p>
              <span>GitHub:</span>
              <a
                href="https://github.com/Anatolii1996"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/<br/>Anatolii1996
              </a>{" "}
            </p>
            <p>
              <span>Linkedin:</span>
              <a
                href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/анатолій-<br/>ткаченко-5525a7127
              </a>
            </p>
          </div>
          <div className="stack">
            {language === "ua" ? (
              <h3>Стек технологій</h3>
            ) : (
              <h3>Technology stack</h3>
            )}
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
          </div>
        </aside>
      </div>

      <div className="future_footer">
        {language === "ua" ? (
            <h2>Технології для подальшого вивчення</h2>
          ) : (
            <h2>Technologies for further study</h2>
          )}
          <ul className="future_tech">
            <li>
              {" "}
              <img src={NestLogo} className="img_logo" alt="Nest-logo" />
              <p>Nest.js</p>
            </li>
            <li>
              {" "}
              <img src={NextLogo} className="img_logo" alt="Nest-logo" />
              <p>Next.js</p>
            </li>
            <li>
              {" "}
              <img src={BunLogo} className="img_logo" alt="Nest-logo" />
              <p>Bun.sh</p>
            </li>
            <li>
              {" "}
              <img src={GSAPLogo} className="img_logo" alt="Nest-logo" />
              <p>GSAP</p>
            </li>
            <li>
              {" "}
              <Icon icon="devicon:storybook" />
              <p>Storybook</p>
            </li>
            <li>
              {" "}
              <Icon icon="vscode-icons:file-type-eslint2" />
              <p>Eslint</p>
            </li>
            <li>
              {" "}
              <Icon icon="tabler:brand-react-native" />
              <p>React native</p>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Home;
