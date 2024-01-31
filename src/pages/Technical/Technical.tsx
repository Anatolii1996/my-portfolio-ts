/* eslint-disable */
import React, { useState, useEffect, FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import { Icon } from "@iconify/react";
import { LanguageContext } from "../../context";
import "./technical.scss";

const Technical: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  const language = useContext(LanguageContext);
  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(3));
    };

    return handleUnmount;
  }, [dispatch]);

  const [pageAnimStyle, setPageAnimStyle] = useState("");

  const indexPage = 3;

  useEffect(() => {
    setPageAnimStyle(setPageAnimation("tech", indexPage, indexPrevPage));
  }, [indexPrevPage]);

  return (
    <div className={pageAnimStyle}>
      {language === "ua" ? (
        <>
          <p>
            Цей розділ буде цікавий для розробника, який випадково потрапив на
            даний ресурс, а також для потенційного роботодавця, який хоче
            зрозуміти якими технологіями я, як кандидат володію.
          </p>
          <p>
            Даний проєкт став свого роду навчальним полігоном для мене, на якому
            я відточував свої навички розробника. Багато технологій та бібліотек
            були використані мною вперше, що потребувало певного часу на
            освоєння та вивчення документації.
          </p>
          <p>
            Найсуттєвішою такою технологією став TypeScript. Власне проєкт був
            заново переписаний на TypeScript коли вже було створено близько 30%
            кодової бази. Рішення переводити проєкт на TS було продиктовано
            високою популярністю цієї мови, та вимогою знання TS в 90% вакансій
            frontend-розробника.
          </p>

          <p>
            В цьому розділі я постараюся максимально детально описати технічну
            сторону розробки даного додатку, а також окремо зупинюсь на кожній
            технології, якою я користувався під час розробки, та яка, на мою
            скромну думку варта особливої уваги.
          </p>
          <p>
            Хочу звернути увагу на те, що я не є професійним розробником, тому
            будь-яке моє твердження не претендує на статус абсолютної істиності,
            а всього лише відображає моє враження від використання тієї чи іншої
            технології. В разі якщо ви не згодні з наведеними нижче тезами,
            прошу залишити <Link to="/feedback">зворотній зв'язок</Link> . Буде
            дуже цікаво дізнатись Вашу думку.
          </p>
          <h1>Отже почнемо</h1>
          <p>
            Даний додаток створений за допомогою стеку MERN. Побачивши на
            базовому рівні, що таке React та обираючи, що вивчати далі, я
            спрямував свою увагу на Node.js. Створення backend логіки мене
            захопило не меньш ніж frontend, плюс це вміння значно розширює
            можливості розробника. Вміле використання стеку MERN, напевно вже
            щось говорить про рівень розробника, і для мене це вміння, хоч і на
            базовому рівні, стало певним досягненням або навіть невеличким
            приводом для гордості =) Принцип розробки Desktop First (бо мені так
            зручніше). Це означає, що насамперед ресурс створено для перегляду
            на екрані ноутбука (1440px), проте я доклав усіх зусиль для того щоб
            моя верстка не розпадалась на маленьких екранах.
          </p>
        </>
      ) : (
        <>
          <p>
            This section will be of interest to both a developer who
            accidentally stumbled upon this resource and a potential employer
            who wants to understand what technologies I, as a candidate, have.
          </p>
          <p>
            This project became a kind of testing ground for me, where I honed
            my skills as a developer. I used many technologies and libraries for
            the first time, which required some time to master and study the
            documentation.
          </p>
          <p>
            TypeScript became the most important technology. The project was
            actually rewritten in TypeScript when about 30% of the code base had
            already been created. The decision to translate the project into TS
            was dictated by the high popularity of this language, as well as the
            requirement of TS knowledge in 90% of vacancies for front-end
            developers.
          </p>

          <p>
            In this section, I will try to describe the technical side of
            developing this application, as well as separately focus on each
            technology that I used during development and which, in my humble
            opinion, deserves special attention.
          </p>
          <p>
            Please note that I am not a professional developer, so any of my
            statements do not claim to be the absolute truth, but only reflect
            my impression of using a particular technology. If you disagree with
            the following statements, please do not hesitate to provide{" "}
            <Link to="/feedback">feedback</Link>. It will be very interesting to
            know your opinion.
          </p>
          <h1>So let's get started</h1>
          <p>
            This application was built using the MERN stack. Having seen what
            React is at a basic level and choosing what to study next, I turned
            my attention to Node.js. Creating backend logic fascinated me as
            much as the frontend no less than the front-end, and this skill
            significantly expands the developer's capabilities. The skillful use
            of the MERN stack probably already says something about the level of
            the developer, and for me, this skill, even at the basic level, has
            become a certain achievement or even a small reason to be proud =)
            Desktop First design principle (because it's more convenient for
            me). This means that the resource is primarily designed to be viewed
            on a laptop screen (1440px), but I made every effort to ensure that
            my layout does not fall apart on small screens.
          </p>
        </>
      )}

      <ul>
        <li>
          <div className="technical__label">
            <Icon icon="devicon:vscode" />
            <h3>VS Code</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Пам'ятаю як в інституті на парі з інформатики викладач сказала
                нам створити в Блокноті документ "index.txt", потом з конспекта
                написала на дошці фрагмент HTML-розмітки, там було класичне
                програмісське "Hello world!". Для того щоб написати на дошці всю
                потрібну розмітку, в неї пішло хвилин 20. Потім ми повинні були
                перенести цю розмітку в Блокнот, для того, щоб це виконати з
                точністю до кожного знаку, у групи пішло ще хвилин 40. Після
                цього ми змінили розфирення файлу на ".html", запустили його в
                браузері і "о-диво" побачили на моніторі "Hello world!". 2
                слова! За годину!
              </p>
              <p>
                Потім через 9 років я почав вивчати програмування і побачив VS
                Code, з усіми його доповненнями, форматуваннями та ін. Код який
                виконується в браузері, можна писати де-завгодно, хоч в
                Блокноті, різниця тільки в швидкості, та зручності написання.
              </p>
              <p>
                Використання VS Code порівняно з моїм інститутським досвідом, це
                як полетіти в космос. Ті можливості які дають плагіни для VS
                Code роблять процес написання коду зручним, швидким та
                зрозумілим. Чим більше я цим займаюсь, тим більше відкриваю для
                себе нові інструменти, ось нещодавно відкрив для себе сніппети
                та редагування коду за допомогою штучного інтелекту. Впевнений,
                що далі я відкрию для себе ще багато крутих фішок цього
                редактора коду.{" "}
              </p>
              <p>
                Від людей які пробували WebStorm чув, що він ще кращий. Особисто
                мене поки що цілкам влаштовує VS Code, особливо враховуючи те,
                що не зважаючи на все вищесказане він ще й абсолютно
                безкоштовний. Для мене це просто мегакрутий інструмент!
              </p>
            </>
          ) : (
            <>
              <p>
                I remember at the institute, in a computer science class, the
                teacher told us to create a document in our Notepad called
                "index.txt" and then wrote a piece of HTML markup from the
                synopsis on the board, with the classic programmer's phrase
                "Hello world!". It took him about 20 minutes to write all the
                necessary markup on the board. Then we had to transfer the
                markup to a notebook to make sure it was accurate to every
                character, which took the group another 40 minutes. After that,
                we changed the file extension to ".html", launched it in a
                browser, and, lo and behold, the words "Hello world!" appeared
                on the screen. 2 words! In an hour!
              </p>
              <p>
                Then, 9 years later, I started learning programming and saw VS
                Code, with all its add-ons, formats, etc. The code that runs in
                the browser can be written anywhere, even in a , the only
                difference is the speed and convenience of writing.
              </p>
              <p>
                Using VS Code compared to my institutional experience is like
                flying into space. The possibilities provided by VS Code plugins
                make the process of writing code convenient, fast, and clear.
                The more I do it, the more I discover new tools. For example, I
                recently discovered code snippets and editing with artificial
                intelligence. I am sure I will discover many more interesting
                features of this code editor.
              </p>
              <p>
                I have heard from people who have tried WebStorm that it is even
                better. Personally, I'm still quite happy with VS Code,
                especially considering the fact that, despite all of the above,
                it's also completely free. For me, it's just a mega-cool tool!
              </p>
            </>
          )}
        </li>
        <li>
          {" "}
          <div className="technical__label">
            <Icon icon="skill-icons:typescript" />
            <h3>TypeScript</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Під час роботи над даним проєктом, відбулось моє перше
                знайомство з цією мовою. Тому хто з Вас буде дивитись мій код,
                не судіть строго).
              </p>
              <p>В цілому мої враження від використання TS позитивні.</p>
              <p>
                Як було сказано вище, починав писати проєкт я на JS. Потім
                вирішив переписати та продовжувати роботу на TS, причин тому
                декілька:
              </p>
            </>
          ) : (
            <>
              <p>
                While working on this project, I got acquainted with this
                language for the first time. Therefore, those who will look at
                my code, do not judge me too harshly).
              </p>
              <p>Overall, my impressions of using TS are positive.</p>
              <p>
                As mentioned above, I started writing the project in JS. Then I
                decided to rewrite and continue working in TS for several
                reasons:
              </p>
            </>
          )}
          <ol>
            {language === "ua" ? (
              <>
                {" "}
                <li>
                  По-перше, більшість вакансій вимагають знання TS, а ринок
                  праці диктує, які технології повинні вивчати розробники.
                </li>
                <li>
                  По-друге, ця мова зараз стрімко набирає популярність, і в
                  Європі вона є чи не найпопулярнішою мовою програмування.
                </li>
                <li>
                  По-третє знання TS дозволяє опановувати інші фреймворки такі
                  як Angular. І хоча я зараз не планую вчити Angular, все ж в
                  майбутньому не відкидаю таку можливість. А от наприклад Nest
                  збираюсь вчити відразу після того як покрию код тестами, а там
                  також TS (ще й ООП), тому знання TypeScript вважаю зараз
                  обов'язковим для Frontend/FullStack розробника.
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  First of all, all vacancies require TS knowledge, and the
                  labor market dictates which technologies developers should
                  study.
                </li>
                <li>
                  Secondly, this language is now rapidly gaining popularity, and
                  in Europe it is perhaps the most popular programming language.
                </li>
                <li>
                  Thirdly, TS knowledge allows you to master other frameworks,
                  such as Angular. And although I don't plan to learn Angular
                  now, I still don't rule out this possibility in the future.
                  But, for example, I am going to learn Nest as soon as I cover
                  the code with tests, and it also uses TS (and OOP), so I
                  consider TypeScript knowledge to be a must for a
                  Frontend/FullStack developer.
                </li>
              </>
            )}
          </ol>
        </li>
        <li>
          {language === "ua" ? (
            <>
              <h2>Frontend частина</h2>
              <p>
                Frontend частина даного проєкту знаходиться в репозиторії на
                GitHub, за адресою:{" "}
                <a
                  href="https://github.com/Anatolii1996/my-portfolio-ts"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Anatolii1996/my-portfolio-ts
                </a>
                .
              </p>
              <p>
                Тут Ви знайдете всю кодову базу даного проєкту. Також, якщо в
                когось із розробників виникнуть ідєї з покращення якості коду,
                дуже хочу їх почути!
              </p>
            </>
          ) : (
            <>
              <h2>Frontend part</h2>
              <p>
                The front-end part of this project is available in the GitHub
                repository at the following address:{" "}
                <a
                  href="https://github.com/Anatolii1996/my-portfolio-ts"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Anatolii1996/my-portfolio-ts
                </a>
                .
              </p>
              <p>
                Here you will find the entire code base of this project. Also,
                if any of the developers have any ideas on how to improve the
                quality of the code, I would love to hear them!
              </p>
            </>
          )}

          <div className="technical__label">
            <Icon icon="devicon:react" />
            <h3>React</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Даний веб-додаток, є SPA додатком, створеним на React, за
                допомогою збірки Create React App. Останнім часом зустрічаю все
                більше інформації про те що CRA вже застарів і в 2023 році вже
                треба використовувати Vite. При цьому кількість такої
                інформації, та одностайна наполегливість різних розробників з
                усього світу, спонукають мене до думки, що так воно і є. Ну що
                ж. Обіцяю, що наступний проєкт буде створений на Vite!
              </p>
              <p>
                Під час розробки зіштовхнувся з проблемою, яка є джерелом
                нервових розладів всіх починаючих React-розробників - подвійне
                монтування компоненту в development-режимі. Ох скільки ж
                нервових клітин втратив кожен з них (включаючи мене), поки не
                зрозумів, цю особливість поведінки застосунку. Я вирішив цю
                проблему банально просто - відключивши React.StrictMode.
                Насправді я думаю, що це неправильно, адже однією з фішок реакту
                і є строгий режим за-замовчуванням, напевно він має убезпечити
                розробника від дурних помилок. Команда розробників реакту
                створили функцію подвійного монтування компоненту в
                development-режимі спеціально для того, щоб я міг бачити як мій
                компонент буде себе поводити при відмонтуванні, і дотягнули її
                аж до 18 мажорної версії React, а я просто взяв і відімкнув її
                (окремо хочу їм подякувати за таку можливість). Впевнений, що це
                не найкраще рішення. Професфйні розробники, як Ви вирішуєте цю
                проблему? Можливо я просто маю по іншому писати код?
              </p>
            </>
          ) : (
            <>
              <p>
                This web application is a SPA application built in React using
                the Create React App assembly. Recently, I've been seeing more
                and more information that CRA is already outdated and that in
                2023 we should use Vite. At the same time, the amount of such
                information, as well as the unanimous insistence of various
                developers from around the world, makes me think that this is
                true. So. I promise that the next project will be built on Vite!
              </p>
              <p>
                During development, I encountered a problem that is a source of
                nerves for all novice React developers - double mounting of a
                component in development mode. Oh, how many nerve cells each of
                them (including me) lost while realizing this feature of the
                application's behavior. I solved this problem in a trivial and
                simple way - by disabling React.StrictMode. Actually, I think
                this is wrong, because one of the features of React is the
                default strict mode, it is supposed to protect developers from
                stupid mistakes. The React development team specifically created
                the ability to double-mount components in development mode so
                that I could see how my component would behave when unmounted,
                and they brought it all the way to React version 18, and I just
                turned it off (I want to thank them for this feature). I'm sure
                it's not the best solution. Professional developers, how do you
                solve this problem? Maybe I just need to write the code
                differently?
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="logos:redux" />
            <h3>Redux</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Ну і як же без Redux. Мабуть найпопулярніший state-менеджер для
                react-застосунків. Коли я тільки познайомився з ним, він мені
                здався занадто складним, це був старий підхід, коли для того, що
                все це працювало треба було створювати купу редьюсерів,
                action-creator і т.д. З того часу як з'явився redux-toolkit,
                використання redux стало максимально простим та зручним, ти
                просто створюєш стор, під кожний action робиш окремий slice,
                який по-суті є твоїм action-creator-ом і reducer-ом (2 в 1) і
                все. Плюс react-redux має чудову зрозумілу документацію, а також
                в останній версії переписаний на TypeScript, що виключає
                необхідність підключення додаткової бібліотеки для типізації
                redux-у, все вже працює з коробки (ще один аргумент зростання
                популярності TypeScript), тому не думаю, що найближчим часом
                пересяду на щось інше, хоча останнім часом ледь не на кожному
                профільному ресурсі зустрічаю інформацію про те, що є інший
                state-менеджер який швидший, кращий і скоро вб'є redux. Не
                думаю, що це так! Якщо я неправий переконайте мене в іншому.
              </p>
              <p>
                В данному додатку до редаксу підключена анімація переходу по
                сторінках, якщо дорогий гість помітив логіку такої анімації, при
                переході по навігаційним посиланням зліва направо - наступна
                сторінка з'являється зправа і навпаки. При покиданні сторінки
                (componentDidUnmount) записую її порядковий номер в redux. На
                наступній сторінці є логіка, яка порівнює поточний номер
                сторінки та запис в redux, та відображає сторінку зліва чи
                зправа. В мене з'явилась дана ідея і я придумав такий спосіб
                реалізації. Якщо хтось знає, як це можна зробити простіше,
                будь-ласка підкажіть.
              </p>
              <p>
                Також, під час завантаження додатку, в стор записую всю
                необхіжну інформацію з бази даних, що підвищує швидкість роботи
                додатку.
              </p>
            </>
          ) : (
            <>
              <p>
                What about Redux? It's probably the most popular state manager
                for react apps. When I first got acquainted with it, it seemed
                too complicated, it was an old approach when you had to create a
                bunch of reducers, action-creator, etc. After redux-toolkit,
                redux became very simple and easy to use, you just create a
                page, make a slice for each action, which is essentially your
                action-creator and reducer (2 in 1), and that's it. Plus,
                react-redux has excellent clear documentation, and the latest
                version is rewritten in TypeScript, which eliminates the need to
                connect an additional library for redux typing, everything
                already works out of the box (another argument in favor of the
                growing popularity of TypeScript), so I don't think I'll be
                switching to anything else in the near future. Although lately,
                I've been reading information on almost every specialized
                resource that there is another state manager that is faster,
                better, and will soon kill redux. I don't think this is true! If
                I am wrong, please convince me otherwise.
              </p>
              <p>
                In this application, the editor is connected to the animation of
                the transition between pages, if a dear guest has noticed the
                logic of such animation, when you click on the navigation links
                from left to right, the next page appears on the right and vice
                versa. When I exit a page (componentDidUnmount), I write its
                sequence number to redux. On the next page, there is logic that
                compares the current page number with the entry in redux and
                displays the page to the left or right. I had this idea and
                figured out how to implement it. If anyone knows how it can be
                done more easily, please let me know.
              </p>
              <p>
                Also, when loading the program, I record all the necessary
                information from the database, which increases the speed of the
                program.
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="logos:redux-saga" />
            <h3>Redux-Saga</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Бібліотека з екосистеми редаксу. Найперший спосіб написання
                асинхронного коду декларативно, що я побачив. Засновано на
                функціях-генераторах, що є нетривіальним розділом JavaScript,
                тому потребує трохи часу на вивчення. Зате зрозумівши як це
                працює, я отримав зручний спосіб керування асинхронним кодом.
                Логіка асинхронних викликів стала лаконічною та зрозумілою.
              </p>
              <p>
                Знаю, що зараз такий спосіб керування асинхронним кодом є
                застарілим, адже після появи reduxjs/toolkit всі перейшли на RTK
                Query. Я також дивився в цю сторону, з використанням RTK Query
                коду стає менше, але на мою думку код не такий зрозумілий і не
                так тонко можна керувати асинхронними викликами. Загалом
                Redux-Saga мені дуже подобається.
              </p>
              <p>
                А в який спосіб Ви керуєте асинхронним кодом? Невже Redux-Saga
                вже є безнадійно застарілим?
              </p>
            </>
          ) : (
            <>
              <p>
                Library from the redux ecosystem. The very first way I've seen
                to write asynchronous code declaratively. It's based on
                generator functions, which is a non-trivial section of
                JavaScript, so it takes a little time to learn. But once I
                understood how it worked, I had a convenient way to manage
                asynchronous code. The logic of asynchronous calls became
                concise and clear.
              </p>
              <p>
                I know that now this way of managing asynchronous code is
                outdated, because after the release of reduxjs/toolkit, everyone
                switched to RTK Query. I also looked in this direction, using
                RTK Query there is less code, but in my opinion, the code is not
                as clear and you cannot control asynchronous calls so finely. In
                general, I really like Redux-Saga.
              </p>
              <p>
                How do you manage asynchronous code? Is Redux-Saga hopelessly
                outdated?
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="logos:ant-design" />
            <h3>Ant.Design</h3>
          </div>
          <p>
            Найбільший UI-фреймворк, що я бачив. Всі UI-компоненти в даному
            проєкті, взяті звідти (крім форми). Живий продукт який постійно
            розвивається, та має дуже широкий функціонал. Код написаний відразу
            в двох варіантах, на JS та TS, обирай, що треба. Має дуже великі
            можливості для кастомізації компонентів, проте не безмежні. Через
            велику базу, потребує часу на вивчення, чим я зараз і займаюсь. Буду
            використовувати і надалі.
          </p>
        </li>

        <li>
          <div className="technical__label">
            <Icon icon="logos:sass" />
            <h3>Sass</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>Початок нового проєкту в мене виглядає так:</p>
              <ol>
                <li>Встановлюю збірку Create React App.</li>
                <li>Видаляю зайвий код.</li>
                <li>Встановлюю Sass.</li>
                <li>Запускаю проєкт та починаю працювати.</li>
              </ol>
              <p>Переваги які дає мені Sass порівняно зі звичайним CSS:</p>
              <ol>
                <li>
                  Більша лаконічність коду за рахунок можливості використання
                  вкладених селекторів.
                </li>
                <li>Міксіни.</li>
                <li>Змінні.</li>
              </ol>
              <p>
                У вакансіях розробника, які я періодично продивляюсь, досить
                часто вимагають знання перпроцесорів, таких як Sass або Less.
              </p>
              <p>
                Насправді, останні оновлення CSS мають всі основні функції, які
                ми любимо в Saas. Основна з них - це вкладеність селекторів, яка
                дозволяє створювати вкладені селектори у звичайному CSS. Змінні
                там існують вже давно. Міксини я використовую рідко, бо зазвичай
                не маю великої повторюваності CSS коду.
              </p>
              <p>
                Я розумію, що це не єдине, що пропонує нам Sass. Наприклад,
                можна писати цикли для стилів - але, на мою думку, це дуже
                специфічний випадок. Можливість використовувати умови if/else, я
                роблю це в коді компонента, а бібліотека Classnames дозволяє
                робити це зручно і супер зрозуміло.
              </p>
              <p>
                Тому в мене виникла ідея повністю відмовитись від Saas, я
                спробував і це не вдалося, мені не вистачило можливості
                наслідування стилів у звичайному CSS, тому буду надалі брати цю
                технологію, принаймні поки в звичайному CSS не з'являться всі
                необхідні для мене можливості.
              </p>
            </>
          ) : (
            <>
              <p>For me, the beginning of a new project looks like this:</p>
              <ol>
                <li>Install the Create React App assembly.</li>
                <li>I delete the extra code.</li>
                <li>Install Sass.</li>
                <li>I launch the project and start working.</li>
              </ol>
              <p>Advantages that Sass gives me over regular CSS:</p>
              <ol>
                <li>
                  More concise code due to the ability to use nested selectors.
                </li>
                <li>Mixins.</li>
                <li>Variables.</li>
              </ol>
              <p>
                The developer jobs I look at from time to time often require
                knowledge of preprocessors like Sass or Less.
              </p>
              <p>
                In fact, the latest CSS updates have all the major features we
                love in Saas. The main one is CSS nesting, which allows you to
                create nested selectors in regular CSS. Variables have been
                around for a long time. I rarely use mixins because I don't have
                a lot of CSS code repetition.
              </p>
              <p>
                I realize that this is not the only thing Sass offers us. For
                example, you can write loops for styles, but I think this is a
                very specific case. The ability to use if/else conditions, I do
                it in the component code, and the Classnames library allows me
                to do it conveniently and super clearly.
              </p>
              <p>
                So I had the idea to completely abandon Saas, I tried it and it
                didn't work, I lacked the ability to inherit styles in regular
                CSS, so I will continue to use this technology, at least until
                regular CSS has all the features I need.
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <h3>Animate.css</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Дуже проста та інтуїтивно зрозуміла бібліотека анімацій, яка
                втім дуже обмежена за своїми можливостями. З її допомогою
                зроблена анімація перходів між сторінками (в зв'язці з redux), a
                також анімація зірочки в хедері. Логіка наступна: при
                завантаженні сторінки відображаеться кількість користувачів які
                вже відвідували сторінку, якщо користувач заходить вперше - його
                зір радує анімація зірочки, яка з'являється поступово
                збільшуючись в розмірах та обертаючись, а також анімований
                лічильник користувачів, який стає більшим на 1. При повторному
                вході такої краси вже немає, бо право насолодитися чудовою
                анімашкою дається тільки раз)))
              </p>
              <p>
                Кількість користувачів та кількість їх входів визначається на
                backend-і (так на цей момент вже написана досить солідна кодова
                база backend-у), про це далі.
              </p>
              <p>
                В цілому про цю бібліотеку можу сказати наступне. Якщо ті види
                анімації, які вона пропонуює влаштовують - то кращого рішення не
                бачу. Проте створити щось дійсно круте вона не може.
              </p>
            </>
          ) : (
            <>
              <p>
                A very simple and intuitive animation library, which, however,
                is very limited in its capabilities. It is used to implement
                animation of transitions between pages (in combination with
                redux), as well as animation of the asterisk in the header. The
                logic is as follows: when the page loads, the number of users
                who have already visited the page is displayed; if the user
                visits for the first time, his eyes are pleased with the
                animation of an asterisk that gradually increases in size and
                rotates, as well as an animated user counter that becomes larger
                by 1. When he logs in again, this beauty is no longer there,
                because the right to enjoy the wonderful animation is given only
                once)))
              </p>
              <p>
                The number of users and the number of their logins is determined
                on the backend (so at this point, a fairly solid backend code
                base has already been written), more on that later.
              </p>
              <p>
                In general, I can say the following about this library. If the
                types of animations it offers are satisfactory, then I don't see
                a better solution. However, it cannot create something really
                cool.
              </p>
            </>
          )}
        </li>

        <li>
          <div className="technical__label">
            <h3>Classnames</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Дану бібліотеку я раніше не використовував, на цьому проєкті
                вона стала для мене відкриттям. З її допомогою дуже зручно
                створювати динамічні стилі, дозволяє прибрати купу тернарних
                операторів під час визначення класів, код стає чистим,
                лаконічним та зрозумілим. Обов'язково буду користуватись в
                майбутньому.
              </p>
            </>
          ) : (
            <>
              <p>
                I hadn't used this library before, and on this project it was a
                revelation for me. It's very convenient to use it to create
                dynamic styles, allows you to remove a bunch of ternary
                operators when defining classes, and the code becomes clean,
                concise, and understandable. I will definitely use it in the
                future.
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="simple-icons:iconify" />
            <h3>Iconify</h3>
          </div>
          {language === "ua" ? (
            <>
              {" "}
              <p>
                Мабуть найбільша бібліотека іконок, що я бачив. Більшість іконок
                взяті звідти.
              </p>
            </>
          ) : (
            <>
              {" "}
              <p>
                Probably the largest library of icons I've ever seen. Most of
                the icons are taken from there.
              </p>
            </>
          )}
        </li>
        <li>
          {language === "ua" ? (
            <>
              <h2>Backend частина</h2>
              <p>
                Backend частина даного проєкту знаходиться в репозиторії на
                GitHub, за адресою:{" "}
                <a
                  href="https://github.com/Anatolii1996/blog-backend2"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Anatolii1996/
                  <br />
                  blog-backend2
                </a>
                .
              </p>
              <p>
                Тут Ви знайдете всю кодову базу даного проєкту, окрім ключів до
                бази даних. Аналогічно, в разі виникнення ідєй з покращення
                якості коду, прошу зі мною поділитись.{" "}
              </p>
            </>
          ) : (
            <>
              {" "}
              <h2>Backend part</h2>
              <p>
                The backend part of this project is available in a repository on
                GitHub at the following address:{" "}
                <a
                  href="https://github.com/Anatolii1996/blog-backend2"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Anatolii1996/
                  <br />
                  blog-backend2
                </a>
                .
              </p>
              <p>
                Here you will find the entire code base of this project, except
                for the database keys. Also, if you have any ideas on how to
                improve the quality of the code, please share them with me.
              </p>
            </>
          )}

          <div className="technical__label">
            <Icon icon="vscode-icons:file-type-node" />
            <h3>Node.js</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                За допомогою Node.js написаний backend додатку. На backend-і
                ідентифікація нового користувача, запис його в базу даних
                MongoDB та отримання з БД всіх користувачів, що раніше записані,
                а також обробка повідомлень в чаті. Дуже цікава та функціональна
                технологія. Розумію, що вивчати тут мені ще доведеться дуже
                багато, але обов'язково буду цим займатись. В якості Node.js
                фреймворку взято Express через його простоту та популярність.
                Код дуже схожий на звичайний Node.js, тому період звикання
                мінімальний. В майбутньому все ж планую перейти на Nest. Хто
                пише backend, що про це думаєте?
              </p>
            </>
          ) : (
            <>
              <p>
                The backend of the application is written using Node.js. On the
                backend identifying a new user, writing it to the MongoDB
                database and retrieving all users from the database, previously
                recorded, as well as processing chat messages. This is a very
                interesting and functional technology. I realize that I still
                have a lot to learn here, but I will definitely do it. I chose
                Express as a Node.js framework because of its simplicity and
                popularity. The code is very similar to regular Node.js, so the
                period of getting used to it is minimal. I plan to switch to
                Nest in the future. Who writes the backend, what do you think of
                it?
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="vscode-icons:file-type-mongo" />
            <h3>MongoDb</h3>
          </div>
          {language === "ua" ? (
            <>
              <p>
                Перша база даних, з якою я так серйозно працював. Досить потужна
                NoSQL база даних. Має можливість працювати з даними локально або
                в хмарі. Має розвинену підтримку та багато зрозумілої
                документації. Має можливість задання строгої типізації для даних
                в колекціях, без TypeScript, що дозволяє зробити взаємодію з БД
                стабільною, та уникнути зайвих помилок. Як на мене то типізація
                працює не настільки круто як в TS, але така можливість все одно
                крута. Firebase мені не настільки сподобався. В майбутньому буду
                вважати основною БД, якщо не буде інших вимог. А якими базами
                даних користуєтесь Ви?
              </p>
            </>
          ) : (
            <>
              <p>
                It's the first database I've worked with so seriously. This is a
                fairly powerful NoSQL database. It has the ability to work with
                data locally or in the cloud. It has developed support and a lot
                of clear documentation. documentation. It has the ability to set
                strict typing for data in collections, without TypeScript, which
                makes interaction with the database stable and avoids
                unnecessary errors. As for me, the typing doesn't work as well
                as in TS, but this feature is still cool. I didn't really like
                Firebase. In the future, I will consider Mongo as my main
                database unless I have other requirements. What databases do you
                use?
              </p>
            </>
          )}
        </li>

        <li>
          <div className="technical__label">
            <Icon icon="devicon:git" />
            <Icon icon="devicon:github" />
            <h3>Git/GitHub</h3>
          </div>
          {language === "ua" ? (
            <>
              {" "}
              <p>
                Ще одна незамінна технологія для сучасного розробника. Без
                контролю версій зараз ніяк. Наразі не вважаю, що опанував цю
                технологію на 100%, просто навчився користуватися на тому рівні,
                якого зараз достатньо. Коли ти робиш свої перші кроки в
                програмуванні, спочатку стикаєшся з проблемою, коли треба
                повернути попередню версію коду, на цьому етапі ти відкриваєш
                для себе Git, вчишся працювати з коммітами і думаєш, що на цьому
                все. Але це напевно тільки 10% того, що дає тобі Git. Справжня
                магія починається тоді коли ти починаєш працювати в команді
                розробників яка складається з більше ніж 2-х людей. Одночасна
                робота багатьох людей над різними частинами кодової бази, ось
                для чого потрібен Git.
              </p>
              <p>
                Почув від досвідченого розробника пораду про те, що під кожну
                фічу яку ти додаєш потрібно створювати окрему гілку, а потім
                коли все буде готово зливати все в основну гілку, інакше твій
                код дуже швидко перетворться в кашу. Під час роботи над цим
                проектом я вперше вирішив так зробити, і я вважаю, що ця порада
                виявилась досить слушною. Такий підхід використання, як я
                вважав, досить знайомого для мене інструменту, відкрив для мене
                просто новий горизонт в розробці, тепер тільки так і буду
                робити. Перш ніж спробувати цей підхід, я досить сильно вагався.
                Були думки "Та ти ж все одно працюєш один" "Просто заливай всі
                комміти одразу в master" "Такий підхід ускладнить роботу" "Різні
                частини коду будуть в різних місцях, ти заплутаєшсь, нащо воно
                тобі треба".
              </p>{" "}
              <p>
                Не заплутався! Треба! Особливо враховуючи те, що я не
                використовув під час роботи над цим проєктом методологію Scrum,
                не розділяв роботу на окремі таски. Робота йшла просто по
                натхненню, прийшла ідея - зробив, захотів дописати рядок тексту
                чи коду для якоїсь сторінки - перейшов на потрібну гілку і
                додав. Супер зручно!
              </p>
              <p>
                Раніше я чув, що деякі роботодавці під час перегляду
                репозиторіїв кандидатів, звертають увагу на цей момент. І не
                розумів, чому кандидат який працює сам і заливає всі комміти
                одразу в master - не отримує роботу. Тепер зрозумів!
              </p>
            </>
          ) : (
            <>
              {" "}
              <p>
                Another indispensable technology for a modern developer. Version
                control is simply indispensable nowadays. At the moment, I don't
                think I've mastered this technology 100%, I've just learned how
                to use it at the level that is enough for me now. When you take
                your first steps in programming, you first encounter a problem
                when you need to revert a previous version of the code, at this
                stage you discover Git, learn how to work with commits, and
                think that's it. But that's probably only 10% of what Git does.
                The real magic starts when you start working in a development
                team of more than 2 people. Having many people working on
                different parts of the codebase at the same time is what Git is
                all about.
              </p>
              <p>
                I heard from an experienced developer that for every feature you
                add, you need to create a separate branch and then merge it into
                the main branch when everything is ready, otherwise your code
                will turn into a mess very quickly. While working on this
                project, I decided to do this for the first time, and I think
                this advice turned out to be pretty good advice. This approach
                to using what seemed to me to be a fairly familiar tool opened
                up completely new horizons in development for me, and from now
                on I'm going to do it only this way. Before I tried this
                approach, I was very hesitant. I thought: "You're working alone
                anyway", "Just push all the commits into the master at once",
                "This approach will complicate the work", "Different parts of
                the code will be in different places, you'll get confused why
                you need it".
              </p>{" "}
              <p>
                Don't get confused! I have to! Especially considering that I
                didn't use the Scrum methodology while working on this project,
                didn't divide the work into separate tasks. The work went on
                just by inspiration, an idea came to me - I did it, I wanted to
                add a line of text or code for a page - I went to the right
                branch and added it. Super convenient!
              </p>
              <p>
                I've heard before that some employers pay attention to this
                point when looking at candidates' repositories. And I didn't
                understand why a candidate who works alone and pushes all
                commits to the master at once doesn't get the job. Now I
                understand!
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="logos:testing-library" />
            <h3>Testing-library</h3>
          </div>
          {language === "ua" ? (
            <>
              {" "}
              <p>
                На даний момент досить поверхнево знайомий з даною бібліотекою,
                та і з процесом написання тестів в цілому. Після розгоротання
                даного проєкту на хостингу буду поглиблено вивчати дану тему.
                Для більшої продуктивності праці буду шукати собі тестувальника,
                тому якщо хтось із починаючих тестувальників хочу приєднатись,
                зв'яжіться зі мною. Краще через особисті інстаграмму або на
                вайбер за номером телефону.
              </p>
            </>
          ) : (
            <>
              {" "}
              <p>
                At the moment, I am quite superficially familiar with this
                library and the process of writing tests in general. After
                deploying this project on the hosting, I will study this topic
                more deeply. To be more productive, I will be looking for a
                tester, so if any aspiring testers want to join me, please
                contact me. Preferably via personal Instagram or Viber by phone
                number.
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <Icon icon="logos:netlify-icon" />
            <h3>Netlify</h3>
          </div>
          {language === "ua" ? (
            <>
              {" "}
              <p>
                Дуже функціональний безкоштовний хостинг. Тут розміщена frontend
                частина. Має великий функціонал, розгортає проєкти прямо з
                репозиторію на льоту, може хостити backend додатки. Проте для
                роботи з backend-ом досить складний, потребує детального
                вивчення документації та налаштування конфігурації. А ще Netlify
                інколи самим неочікуваним чином ламає стилі - така особливість.
              </p>
              <p>
                Для розміщення backend-у не віддав би перевагу іншому хостингу.
                Для frontend частини підійде, розгорнути проєкт прямо з
                репозиторію GitHub досить просто.
              </p>
              <p>
                Для комерційної роботи не взяв би через ціну. Цікаво, який
                хостинг Ви вважаєте найкращим?
              </p>
            </>
          ) : (
            <>
              {" "}
              <p>
                Very functional free hosting. It hosts the front-end part. It
                has great functionality, deploys projects directly from the
                repository on the fly, and can also host backend applications.
                However, it is rather complicated to work with the backend,
                requiring a detailed study of the documentation and
                configuration settings. And Netlify sometimes breaks styles in
                the most unexpected way - this is a feature.
              </p>
              <p>
                For the backend, I would prefer another hosting service. For the
                frontend, everything is great, it's easy enough to deploy a
                project directly from the GitHub repository.
              </p>
              <p>
                I wouldn't use it for commercial work because of the price. I
                wonder which hosting you think is the best?
              </p>
            </>
          )}
        </li>
        <li>
          <div className="technical__label">
            <h3>Cyclic</h3>
          </div>
          {language === "ua" ? (
            <>
              {" "}
              <p>
                Ще один безкоштовний хостинг, на якому розміщена серверна
                частина додатку. Набагато простіше за Netlify дозволяє
                розгортати backend. Даний хостинг став для мене відкриттям уже
                на фінальному етапі роботи над даним проєктом.
              </p>
              <p>
                Просто та швидко розгортає проєкт прямо з репозитрію.
              </p>
            </>
          ) : (
            <>
              {" "}
              <p>
                Another free hosting service that hosts the server side of the
                application. It is much easier to deploy the backend than
                Netlify. I discovered this hosting at the final stage of the
                project.
              </p>
              <p>
              It is easy and fast to deploy a project directly from the repository.
              </p>
            </>
          )}
        </li>
      </ul>
      <div className="next_development">
        {language === "ua" ? (
          <>
            <h2>Подальші плани</h2>
            <p>
              Після деплою даного додатку, планую розпочати роботу над іншим
              проєктом, який можливо навіть стане комерційним, тому активну
              роботу над даним ресурсом напевно завершу. Все залежить від того
              який зворотній зв'язок я зберу, та наскільки він буде професійним.
              Однозначно не залишу без уваги виправлення знайдених багів та
              слушні пропозиції по дизайну. Маю певні ідеї стосовно подальшого
              розвитку ресурсу, які далі не хочу впроваджувати сам.
            </p>
            <p>
              Всі сили та час націлю на новий проєкт, там однозначно використаю
              Vite а також запроваджу JWT авторизацію, також для backend-у хочу
              взяти Nest, проте не певен наскільки багато часу знадобиться для
              вивчення нового фреймворку.
            </p>

            <p>
              Про всі кардинальні зміни в даному, та інших проєктах буду
              повідомляти в соцережах на своїх сторінках в Linkedin та
              Instagram.
            </p>
          </>
        ) : (
          <>
            <h2>Future plans</h2>
            <p>
              After the deployment of this application, I plan to start working
              on another project, which may even become commercial, so this will
              probably be the end of my active work on this resource. It all
              depends on what kind of feedback I get and how professional it
              will be. I definitely won't ignore bug fixes and reasonable design
              suggestions. I have a few ideas for further development of the
              resource that I don't want to implement myself.
            </p>
            <p>I will be focusing all my time and energy on the new project and will definitely be using Vite and will also implement JWT authorization and want to use Nest for the backend, but I'm not sure how long it will take to learn the new framework.</p>
            <p>I will inform you about all the fundamental changes in this and other projects I will inform you about all the major changes in this and other projects on my Linkedin and Instagram.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Technical;
