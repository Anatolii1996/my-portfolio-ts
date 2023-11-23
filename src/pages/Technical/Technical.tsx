import React, { useState, useEffect, FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import { Icon } from "@iconify/react";
import { LanguageContext } from "../../context";
// import WOW from "wow.js";
// import "wow.js/css/libs/animate.css";
// import wow_icon from "../../assets/wow-logo.jpg";
import "./technical.scss";

const Technical: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  const language = useContext(LanguageContext)
console.log(language)
  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(3));
    };

    return handleUnmount;
  }, [dispatch]);

  const [pageAnimStyle, setPageAnimStyle] = useState("");
  useEffect(() => {
    setPageAnimStyle(setPageAnimation("tech", 3, indexPrevPage));
  }, [indexPrevPage]);

  // useEffect(() => {
  //   const wow = new WOW();
  //   wow.init();
  // }, []);

  return (
    <div className={pageAnimStyle}>
      <p>
        Цей розділ буде цікавий для розробника, який випадково потрапив на даний
        ресурс, а також для потенційного роботодавця, який хоче зробуміти якими
        технологіями я, як кандидат володію.
      </p>
      <p>
        Даний проєкт став свого роду навчальним полігоном для мене, на якому я
        відточував свої навички розробника. Багато технологій та бібліотек були
        використані мною вперше, що потребувало певного часу на освоєння та
        вивчення документації. Найсуттєвішою такою технологією став TypeScript.
        Власне проєкт був заново переписаний на TypeScript коли вже було
        створено приблизно відсотків 30 кодової бази. Рішення переводити проєкт
        на TS було продиктовано високою популярністю цієї мови, та вимогою
        знання TS в 90% вакансій frontend-розробника.
      </p>
      <p>
        В цьому розділі я постараюся максимально детально описати технічну
        сторону розробки даного додатку, а також окремо зупинюсь на кожній
        технології, якою я користувався під час розробки, та яка, на мою скромну
        думку варта особливої уваги.
      </p>
      <p>
        Хочу звернути увагу на те, що я не є професійним розробником, тому
        будь-яке моє твердження не претендує на статус абсолютної істиності, а
        всього лише відображає моє враження від використання тієї чи іншої
        технології. В разі якщо ви не згодні з наведеними нижче тезами, прошу
        залишити <Link to="/feedback">зворотній зв'язок</Link> . Буде дуже
        цікаво дізнатись Вашу думку.
      </p>
      <h1>Отже почнемо</h1>
      <p>
        Даний додаток створений за допомогою стеку MERN. Побачивши на базовому
        рівні, що таке React та обираючи, що вивчати далі, я спрямував свою
        увагу на Node.js. Створення backend логіки мене захопило не меньше ніж
        frontend, плюс це вміння значно розширює можливості розробника. Вміле
        використання стеку MERN, напевно вже щось говорить про рівень
        розробника, і для мене це вміння, хоч і на базовому рівні, стало певним
        досягненням або навіть невеличким приводом для гордості =){" "}
      </p>

      <ul>
        <li>
          <div className="technical__label">
            <Icon icon="devicon:vscode" />
            <h3>VS Code</h3>
          </div>
          <p>
            Пам'ятаю як в інституті на парі з інформатики викладач сказала нам
            створити в Блокноті документ "index.txt", потом з конспекта написала
            на дошці фрагмент HTML-розмітки, там було класичне програмісське
            "Hello world!". Для того щоб написати на дошці всю потрібну
            розмітку, в неї пішло хвилин 20. Потім ми повинні були перенести цю
            розмітку в Блокнот, для того, щоб це виконати з точністю до кожного
            знаку, у групи пішло ще хвилин 40. Після цього ми змінили розфирення
            файлу на ".html", запустили його в браузері і "о-диво" побачили на
            моніторі "Hello world!". 2 слова! За годину!
          </p>
          <p>
            Потім через 9 років я почав вивчати програмування і побачив VS Code,
            з усіми його доповненнями, форматуваннями та ін. Код який
            виконується в браузері, можна писати де-завгодно, хоч в Блокноті,
            різниця тільки в швидкості, та зручності написання.
          </p>
          <p>
            Використання VS Code порівняно з моїм інститутським досвідом, це як
            полетіти в космос, сфотографувати там теслу Ілона Маска, та
            повернутись назад. Ті можливості які дають плагіни для VS Code
            роблять процес написання коду зручним, швидким та зрозумілим. Чим
            більше я цим займаюсь, тим більше відкриваю для себе нові
            інструменти, ось нещодавно відкрив для себе сніппети, тепер
            натиснуши на 3 клавіші можу створити react-компонент і впевнений, що
            далі я відкрию для себе ще багато крутих фішок цього редактора коду.{" "}
          </p>
          <p>
            Від людей які пробували WebStorm чув, що він ще кращий. Особисто
            мене поки що цілкам влаштовує VS Code, особливо враховуючи те, що не
            зважаючи на все вищесказане він ще й абсолютно безкоштовний. Для
            мене це просто мегакрутий інструмент!
          </p>
        </li>
        <li>
          {" "}
          <div className="technical__label">
            <Icon icon="skill-icons:typescript" />
            <h3>TypeScript</h3>
            <p></p>
          </div>
        </li>
        <li >
          <h2>Frontend частина</h2>

          <div className="technical__label">
            <Icon icon="devicon:react" />
            <h3>React</h3>
          </div>
          <p>
            Даний веб-додаток, є SPA додатком, створеним на React, за допомогою
            збірки Create React App. Останнім часом зустрічаю все більше
            інформації про те що CRA вже застарів і в 2023 році вже треба
            використовувати Vite. При цьому кількість такої інформації, та
            одностайна наполегливість різних розробників з усього світу,
            спонукають мене до думки, що так воно і є. Ну що ж. Обіцяю, що
            наступний проєкт буде створений на Vite!
          </p>
          <p>
            Під час розробки зіштовхнувся з проблемою, яка є джерелом нервових
            розладів всіх починаючих React-розробників - подвійне монтування
            компоненту в development-режимі. Ох скільки ж нервових клітин
            втратив кожен з них (включаючи мене), поки не зрозумів, цю
            особливість поведінки застосунку. Я вирішив цю проблему банально
            просто - відключивши React.StrictMode при рендері додатку. Насправді
            я думаю, що це неправильно, адже однією з фішок реакту і є строгий
            режим за-замовчуванням, напевно він має убезпечити розробника від
            дурних помилок. Команда розробників реакту створили функцію
            подвійного монтування компоненту в development-режимі спеціально для
            того, щоб я міг бачити як мій компонент буде себе поводити при
            відмонтування, і дотягнули її аж до 18 мажорної версії React, а я
            просто взяв і відімкнув її (окремо хочу їм подякувати за таку
            можливість). Впевнений, що це не найкраще рішення. Професфйні
            розробники, як Ви вирішуєте цю проблему? Можливо я просто маю по
            іншому писати код?
          </p>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="logos:ant-design" />
            <h3>Ant.Design</h3>
          </div>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="logos:redux" />
            <h3>Redux</h3>
          </div>
          <p>
            Ну і як же без Redux. Мабуть найпопулярніший state-менеджер для
            react-застосунків. Коли я тільки познайомився з ним, він мені здався
            занадто складним, це був старий підхід коли для того, що все це
            працювало треба було створювати купу редьюсерів, action-creator і
            т.д. З того часу як з'явився redux-toolkit, використання redux стало
            максимально простим та зручним, ти просто створюєш стор, під кожний
            action робиш окремий slice, який по-суті є твоїм action-creator-ом і
            reducer-ом (2 в 1) і все. Плюс react-redux має чудову зрозумілу
            документацію, а також в останній версії переписаний на TypeScript,
            що виключає необхідність підключення додаткової бібліотеки для
            типізації redux-у, все вже працює з коробки (ще один аргумент
            зростання популярності TypeScript), тому не думаю, що найближчим
            часом пересяду на щось інше, хоча останнім часом ледь не на кожному
            профільному ресурсі зустрічаю інформацію про те, що є інший
            state-менеджер який швидший, кращий і скоро вб'є redux. Не думаю, що
            це так! Якщо я неправий переконайте мене в іншому.
          </p>
          <p>
            В данному додатку до редаксу підключена анімація переходу по
            сторінках, якщо дорогий гість помітив логіку такої анімації, при
            переході по навігаційним посиланням зліва направо - наступна
            сторінка з'являється зправа і навпаки. При покиданні сторінки
            (componentDidUnmount) записую її порядковий номер в redux. На
            наступній сторінці є логіка, яка порівнює поточний номер сторінки та
            запис в redux, та відображає сторінку зліва чи зправа. В мене
            з'явилась дана ідея і я придумав такий спосіб реалізації. Якщо хтось
            знає, як це можна зробити простіше, будь-ласка підкажіть.
          </p>
        </li>
        <li >
          <div className="technical__label">
          <Icon icon="logos:redux-saga" />
            <h3>Redux-Saga</h3>
          </div>
          
         
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="logos:sass" />
            <h3>Sass</h3>
          </div>
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
            У вакансіях розробника, які я періодично продивляюсь, досить часто
            вимагають знання перпроцесорів, таких як Sass або Less.
          </p>
          <p>
            Насправді в останніх оновленнях CSS з'явилися всі основні фішки, за
            які ми любимо Saas. Основна з них CSS-nesting, що дозволяє
            створювати вкладеність селекторів у звичайному CSS. Змінні тут були
            вже давно. Міксіни я використовую, в основному, для завдання стилів
            шрифтам (в якомусь іншому випадку, не дуже скорочувалась кількість
            коду, адже повторюваність не така велика), зараз додалася CSS
            властивість "font", куди можна перерахувати всі властивості шрифта -
            той же міксін, той же 1 рядок коду.
          </p>
          <p>
            Розумію, що вказані моменти, це не єдине, що нам пропонує Sass.
            Наприклад є можливість прямо в файлі .scss прописувати цикли для
            стилів - але на мою думку, це дуже специфічний кейс. Можливість
            використання умов if/else, я це роблю в коді компоненту, а
            бібліотека Classnames дозволяє це робити зручно і супер-зрозуміло.
          </p>
          <p>
            Тому в мене виникла ідея повністю відмовитись від Saas, я спробував
            і це не вдалося, мені не вистачило можливості наслідування стилів у
            звичайному CSS, тому буду надалі брати цю технологію, принаймні поки
            в звичайному CSS не з'являться всі необхідні для мене можливості.
          </p>
        </li>
        <li >
          <div className="technical__label">
            <h3>Animate.css</h3>
          </div>
          <p>
            Дуже проста та інтуїтивно зрозуміла бібліотека анімацій, яка втім
            дуже обмежена за своїми можливостями. З її допомогою зроблена
            анімація перходів між сторінками (в зв'язці з redux), a також
            анімація зірочки в хедері. Логіка наступна: при завантаженні
            сторінки відображаеться кількість користувачів які вже відвідували
            сторінку, якщо користувач заходить вперше - його зір радує анімація
            зірочки, яка з'являється поступово збільшуючись в розмірах та
            обертаючись, а також анімований лічильник користувачів, який стає
            більшим на 1. При повторному вході такої краси вже немає, бо право
            насолодитися чудовою анімашкою дається тільки раз)))
          </p>
          <p>
            Кількість користувачів та кількість їх входів визначається на
            backend-і (так на цей момент вже написана досить солідна кодова база
            backend-у), про це далі.
          </p>
          <p>
            В цілому про цю бібліотеку можу сказати наступне. Якщо ті види
            анімації, які вона пропонуює влаштовують - то кращого рішення не
            бачу. Проте створити щось дійсно круте вона не може.
          </p>
        </li>
        {/* <li >
          <div className="technical__label">
            <img src={wow_icon} alt="" />
            <h3>Wow.js</h3>
          </div>
        </li> */}
        <li >
          <div className="technical__label">
            <h3>Classnames</h3>
          </div>
          <p>
            Дану бібліотеку я раніше не використовував, на цьому проєкті вона
            стала для мене відкриттям. З її допомогою дуже зручно створювати
            динамічні стилі, дозволяє прибрати купу тернарних операторів під час
            визначення класів, код стає чистим, лаконічним та зрозумілим.
            Обов'язково буду користуватись в майбутньому.
          </p>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="simple-icons:iconify" />
            <h3>Iconify</h3>
          </div>
        </li>
        <li >
          <h2>Backend частина</h2>

          <div className="technical__label">
            <Icon icon="vscode-icons:file-type-node" />
            <h3>Node.js</h3>
          </div>
          <p>
            За допомогою Node.js написаний backend додатку. На backend-і
            відбувається отримання ip-адреси нового користувача, запис її в базу
            даних MongoDB та отримання з БД ip-адрес всіх користувачів, що
            раніше записані. Дуже цікава та функціональна технологія. Розумію,
            що вивчати тут мені ще доведеться дуже багато, але обов'язково буду
            цим займатись.
          </p>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="skill-icons:expressjs-dark" />
            <h3>Express</h3>
          </div>
          <p></p>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="vscode-icons:file-type-mongo" />
            <h3>MongoDb</h3>
          </div>
        </li>
        <li >
          <div className="technical__label">
            <h3>Mongoose</h3>
          </div>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="devicon:git" />
            <Icon icon="devicon:github" />
            <h3>Git/GitHub</h3>
          </div>
          <p>
            Ще одна незамінна технологія для сучасного розробника. Без контролю
            версій зараз ніяк. Наразі не вважаю, що опанував цю технологію на
            100%, просто навчився користуватися на тому рівні, якого зараз
            достатньо. Коли ти робиш свої перші кроки в програмуванні, спочатку
            стикаєшся з проблемою, коли треба повернути попередню версію коду,
            на цьому етапі ти відкриваєш для себе Git, вчишся працювати з
            коммітами і думаєш, що на цьому все. Але це напевно тільки 10% того,
            що дає тобі Git. Справжня магія починається тоді коли ти починаєш
            працювати в команді розробників яка складається з більше ніж 2-х
            людей. Одночасна робота багатьох людей над різними частинами кодової
            бази, ось для чого потрібен Git.
          </p>
          <p>
            Почув від досвідченого розробника пораду про те, що під кожну фічу
            яку ти додаєш потрібно створювати окрему гілку, а потім коли все
            буде готово зливати все в основну гілку, інакше твій код дуже швидко
            перетворться в кашу. Під час роботи над цим проектом я вперше
            вирішив так зробити, і я вважаю, що ця порада виявилась досить
            слушною. Такий підхід використання, як я вважав, досить знайомого
            для мене інструменту, відкрив для мене просто новий горизонт в
            розробці, тепер тільки так і буду робити. Перш ніж спробувати цей
            підхід, я досить сильно вагався. Були думки "Та ти ж все одно
            працюєш один" "Просто заливай всі комміти одразу в master" "Такий
            підхід ускладнить роботу" "Різні частини коду будуть в різних
            місцях, ти заплутаєшсь, нащо воно тобі треба".
          </p>{" "}
          <p>
            Не заплутався! Треба! Особливо враховуючи те, що я не використовув
            під час роботи над цим проєктом методологію Scrum, не розділяв
            роботу на окремі таски. Робота йшла просто по натхненню, прийшла
            ідея - зробив, захотів дописати рядок тексту чи коду для якоїсь
            сторінки - перейшов на потрібну гілку і додав. Супер зручно!
          </p>
          <p>
            Раніше я чув, що деякі роботодавці під час перегляду репозиторіїв
            кандидатів, звертають увагу на цей момент. І не розумів, чому
            кандидат який працює сам і заливає всі комміти одразу в master - не
            отримує роботу. Тепер зрозумів!
          </p>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="logos:testing-library" />
            <h3>Testing-library</h3>
          </div>
        </li>
        <li >
          <div className="technical__label">
            <Icon icon="logos:netlify-icon" />
            <h3>Netlify</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Technical;
