import React, { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPrevPage } from "../../redux/indexPrevPageSlice";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { FormValues, ErrorValues } from "./types";
import cn from "classnames";
import { setPageAnimation } from "../../helpers/pageAnimatehelper";
import axios from "axios";
import { message } from "antd";
import "./feedback.scss";
import Chat from "../../components/Chat/Chat";

const Feedback: FC = () => {
  const indexPrevPage = useAppSelector((state) => state.indexPrevPage.value);
  const dispatch = useAppDispatch();

  const [chatUpdate, setChatUpdate] = useState(0);

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

  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    comment: "",
  });

  const handleFormChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const infoClasses = {
    name: cn({
      info: formState.name,
    }),
    surname: cn({
      info: formState.surname,
    }),
    comment: cn({
      info: formState.comment,
    }),
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Дані відправлено",
      duration: 1,
    });
  };

  const resolver: Resolver<FormValues> = async (values) => {
    const errors: Partial<ErrorValues> = {};

    if (!values.name) {
      errors.name = {
        type: "required",
        message: "* Це поле обов'язкове",
        maxLength: {
          value: 20,
          message: "* Максимальна довжина 20 символів",
        },
      };
    }

    if (!values.surname) {
      errors.surname = {
        type: "required",
        message: "* Це поле обов'язкове",
        maxLength: {
          value: 20,
          message: "* Максимальная длина 20 символов",
        },
      };
    }

    if (!values.comment) {
      errors.comment = {
        type: "required",
        message: "* Це поле обов'язкове",
        maxLength: {
          value: 1000,
          message: "* Максимальная длина 1000 символов",
        },
      };
    }

    return {
      values: values,
      errors: errors,
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Здесь вы можете выполнить действия с данными формы
    const requestData = {
      name: data.name,
      surname: data.surname, // Другие данные...
      comment: data.comment, // Другие данные...
    };

    const config = {
      method: "post",
      url: "http://localhost:3002/new-comment",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
    };
    axios(config)
      .then(() => {
        setTimeout(() => {
          success();
          setFormState({
            name: "",
            surname: "",
            comment: "",
          });
          setChatUpdate((prev) => prev + 1);
        }, 800);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          Також буду безмежно вдячний кожному, хто додасть мене до своїх
          контактів на{" "}
          <a
            href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127/"
            target="_blank"
          >
            Linkedin
          </a>
          , та підтвердить там мої навички.
        </p>
        <p>
          Дописи, що не відповідатимуть характеру дружнього спілкування будуть
          видалені, а користувачам, що їх залишають буде заборонено повторний
          доступ на даний ресурс!
        </p>
      </div>
      <div className="fedback_place">
        <div className="login-box animate__animated animate__fadeInLeftBig">
          <form onSubmit={handleSubmit(onSubmit)}>
            {contextHolder}
            <div className="user-box">
              <input
                type="text"
                autoComplete="off"
                {...register("name")}
                value={formState.name}
                onChange={handleFormChange}
              />
              <label className={infoClasses.name}>* Ім'я:</label>
              {errors?.name && <p>{errors.name.message}</p>}
            </div>
            <div className="user-box">
              <input
                type="text"
                autoComplete="off"
                {...register("surname")}
                value={formState.surname}
                onChange={handleFormChange}
              />
              <label className={infoClasses.surname}>* Прізвище:</label>
              <p>{errors.surname?.message}</p>
            </div>
            <div className="user-box">
              <textarea
                rows={5}
                autoComplete="off"
                {...register("comment")}
                value={formState.comment}
                onChange={handleFormChange}
              />
              <label className={infoClasses.comment}>* Ваш коментар:</label>
              <p>{errors.comment?.message}</p>
            </div>
            <center>
              <button type="submit">
                ВІДПРАВИТИ
                <span></span>
              </button>
            </center>
          </form>
        </div>
        <Chat chatUpdate={chatUpdate} />
      </div>
    </div>
  );
};

export default Feedback;
