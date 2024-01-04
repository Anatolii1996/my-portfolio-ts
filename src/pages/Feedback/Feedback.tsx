import React, { useState, useEffect, FC, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import { LanguageContext } from "../../context";

import Chat from "../../components/Chat/Chat";
import FormWrap from "../../components/Form/Form";

import "./feedback.scss";

const Feedback: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();
  const language = useContext(LanguageContext);

  useEffect(() => {
    const handleUnmount = () => {
      dispatch(setPrevPage(4));
    };

    return handleUnmount;
  }, [dispatch]);

  const [pageAnimStyle, setPageAnimStyle] = useState("");
  useEffect(() => {
    setPageAnimStyle(setPageAnimation("feedback", 4, indexPrevPage));
  }, [indexPrevPage]);

  return (
    <div className={pageAnimStyle}>
      {language === "ua" ? (
        <div className="feedback_warning">
          <p>
            В даному розділі виможете залишити свою думку стосовно створеного
            мною додатку. Буду дуже вдячний за будь-який зворотній зв'язок.
            Особливо цінним буде для мене відгук професійного розробника,
            приймаю будь-яку конструктивну критику, а також поради стосоно
            якості написання коду, або роботи додатку в цілому.{" "}
          </p>

          <p>
            Дописи, що не відповідатимуть характеру дружнього спілкування будуть
            видалені, а користувачам, що їх залишають буде заборонено повторний
            доступ на даний ресурс!
          </p>
        </div>
      ) : (
        <div className="feedback_warning">
          <p>
            In this section, you will be asked to leave your opinion about the
            application I have created. I will be very grateful for any
            feedback. I will be especially grateful for feedback from a
            professional developer, and I will also accept any constructive
            criticism and advice on the quality of the code or the application
            as a whole.
          </p>

          <p>
          Messages that do not correspond to the nature of friendly communication will be deleted, and users who have left them will be banned from re-accessing this resource!
          </p>
        </div>
      )}

      <div className="fedback_place">
        <FormWrap />
        <Chat />
      </div>
    </div>
  );
};

export default Feedback;
