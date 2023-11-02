import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues, Resolver } from "react-hook-form";
import cn from "classnames";
import axios from "axios";
import { message } from "antd";
import "./feedback.scss";

const Feedback = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");

  const [chatUpdate, setChatUpdate] = useState(0);

  const handleInputChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    event: React.ChangeEvent<T>,
    switchFunc: (value: string) => void
  ) => {
    switchFunc(event.target.value);
  };

  const feedbackWrapClasses = cn("feedback_wrap", {
    // Используем classNames для условных классов
    // "animate__animated animate__fadeInRightBig": indexPage > indexPrevPage,
    // "animate__animated animate__fadeInLeftBig": indexPage <= indexPrevPage,
  });

  const infoClasses = {
    name: cn({
      info: name,
    }),
    surname: cn({
      info: surname,
    }),
    comment: cn({
      info: comment,
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

  type FormValues = {
    name: string;
    surname: string;
    comment: string;
  };

  type ErrorValues = {
    name: {
      type: string,
      message: string,
      maxLength: {
        value: number;
        message: string;
      };
    };
    surname: {
      type: string,
      message: string,
      maxLength: {
        value: number;
        message: string;
      };
    };
    comment: {
      type: string,
      message: string,
      maxLength: {
        value: number;
        message: string;
      };
    };
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
          setName("");
          setSurname("");
          setComment("");
          setChatUpdate((prev) => prev + 1);
        }, 800);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={feedbackWrapClasses}>
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
        <div className="login-box animate__animated animate__fadeInLeftBig">
          <form onSubmit={handleSubmit(onSubmit)}>
            {contextHolder}
            <div className="user-box">
              <input
                type="text"
                autoComplete="off"
                {...register("name")}
                value={name}
                onChange={(e) => {
                  handleInputChange(e, setName);
                }}
              />
              <label className={infoClasses.name}>* Ім'я:</label>
              {errors?.name && <p>{errors.name.message}</p>}
            </div>
            <div className="user-box">
              <input
                type="text"
                autoComplete="off"
                {...register("surname")}
                value={surname}
                onChange={(e) => {
                  handleInputChange(e, setSurname);
                }}
              />
              <label className={infoClasses.surname}>* Прізвище:</label>
              <p>{errors.surname?.message}</p>
            </div>
            <div className="user-box">
              <textarea
                rows={5}
                autoComplete="off"
                {...register("comment")}
                value={comment}
                onChange={(e) => {
                  handleInputChange(e, setComment);
                }}
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
        {/* <Chat chatUpdate={chatUpdate} /> */}
      </div>
    </div>
  );
};

export default Feedback;
