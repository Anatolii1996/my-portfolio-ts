import React, { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import { Icon } from "@iconify/react";
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
      <div className="description">
        <h1>Вітаю кожного, хто зазирнув на мою сторінку!</h1>
        <h2>Давайте знайомитись</h2>
        <div className="description_text">
          
          <p>
            Мене звати Анатолій. І вже пройшло більше року, як я поринув з головою у світ веб-розробки. 
          </p>
          <p>Даний ресурс є моїм Pet проектом, на якому я втілював свої ідеї, та прокачував свої навички.</p>
          <p>Подорожуючи по розділам, ви можете розглянути <Link to="/galery">портфоліо моїх робіт</Link>, детально ознайомитись з технічною частиною розробки даного проєкту, а також залишити зворотній зв'язок.</p>
          <p>Дуже прошу всіх небайдужих додати мене до своїх контактів на <a href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127">Linkedin</a>, а також підтвердити там мої навички. Буду щиро вдячний кожному, хто зрозуміє наскільки це важливо на етапі пошуку першої роботи розробника.</p>
          <p>Нижче наведено перелік моїх скромних досягнень, контактна інформація, а також мої плани стосовно подальшого розвитку.</p>
          <p>Окрім технологій, які я запланував освоїти найближчим часом, ставлю собі за мету - до кінця 2024 року підтягнути рівень англійської до В1.</p>
          <p>Маю ідеї стосовно розширення даного ресурсу, було би цікаво додати профілі більшої кількості користувачів. Тому якщо хтось із моїх колег, починаючих розробників/дизайнерів/тестувальників, хоче долучитись до спільної подальшої роботи, ласкаво прошу.</p>
          <p>Після розгортання даного ресурсу на хостингу, почну роботу над написанням тестів.</p>
          <p>Буду безмежно вдячний кожному хто залишить, в останньому розділі свою думку, стосовно даного ресурсу!</p>
          <h3>Попередній досвід</h3>
          <p>Тут я наведу кілька рядків нудної інформіції, яку зазвичай прийнято вказувати в резюме.</p>
          <p>В 2018 році я закінчив Криворізький національний університет, за спеціальністю "Збагачення корисних копалин", після чого 5 років працював в гірничо-добувній галузі. Зараз знайшов себе в іншій галузі виробництва, проте мрію працювати розробником і докладаю максимум зусиль для досягнення цієї мети.</p>

        </div>
        {sertificats.map((el) => {
          return <ImgWrap width={500} key={el} link={el} />;
        })}

        <h2>Технології для подальшого вивчення</h2>
        <ul>
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

      <aside>
        <img className="my_photo" src={myPhoto} alt="my-photo" />
        <div className="contacts">
          <h3>Контакти:</h3>
          <p>
            <span>Tel:</span> +38(068)777-85-90{" "}
          </p>
          <p>
            <span>Email:</span>
            <a href="mailto: anatoly.tka4enko2014@gmail.com">
              anatoly.tka4enko2014@gmail.com
            </a>
          </p>
          <p>
            <span>GitHub:</span>
            <a href="https://github.com/Anatolii1996" target="_blank">
              https://github.com/Anatolii1996
            </a>{" "}
          </p>
          <p>
            <span>Linkedin:</span>
            <a href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127" target="_blank">
             linkedin.com/in/анатолій-ткаченко-5525a7127
            </a>
          </p>
        </div>

        <div className="stack">
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
        </div>
      </aside>
    </div>
  );
};

export default Home;
