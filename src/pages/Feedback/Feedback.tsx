import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import "./feedback.scss";
import Chat from "../../components/Chat/Chat";
import FormWrap from "../../components/Form/Form";

const Feedback: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

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
      <div className="feedback_warning">
        <p>
          В даному розділі виможете залишити свою думку стосовно створеного мною
          додатку. Буду дуже вдячний за будь-який зворотній зв'язок. Особливо
          цінним буде для мене відгук професійного розробника, приймаю будь-яку
          конструктивну критику, а також поради стосоно якості написання коду,
          або роботи додатку в цілому.{" "}
        </p>
       
        <p>
          Дописи, що не відповідатимуть характеру дружнього спілкування будуть
          видалені, а користувачам, що їх залишають буде заборонено повторний
          доступ на даний ресурс!
        </p>
      </div>
      <div className="fedback_place">
        <FormWrap/>
        <Chat 
         />
      </div>
    </div>
  );
};

export default Feedback;
