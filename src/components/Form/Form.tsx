import React, { useState, FC, useContext } from "react";
import { useAppDispatch } from "../../hooks";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import cn from "classnames";
import { message } from "antd";
import { LanguageContext } from "../../context";
import { createComment } from "../../redux/chatSlice";
import { FormValues, ErrorValues } from "./types";
import "./form.scss";

const FormWrap: FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    comment: "",
  });

  const dispatch = useAppDispatch();
  const language = useContext(LanguageContext);

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

  const handleFormChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Здесь вы можете выполнить действия с данными формы
    dispatch(createComment(data));
    setTimeout(() => {
      success();
      setFormState({
        name: "",
        surname: "",
        comment: "",
      });
    }, 800);
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

  return (
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
          {language == "ua" ? (
            <label className={infoClasses.name}>* Ім'я:</label>
          ) : (
            <label className={infoClasses.name}>* Name:</label>
          )}

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
          {language == "ua" ? (
            <label className={infoClasses.surname}>* Прізвище:</label>
          ) : (
            <label className={infoClasses.surname}>* Surname:</label>
          )}
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
          {language == "ua" ? (
            <label className={infoClasses.comment}>* Ваш коментар:</label>
          ) : (
            <label className={infoClasses.comment}>* Your comment:</label>
          )}
          <p>{errors.comment?.message}</p>
        </div>
        <center>
          <button type="submit">
            {language == "ua" ? "ВІДПРАВИТИ" : "SEND"}

            <span></span>
          </button>
        </center>
      </form>
    </div>
  );
};

export default FormWrap;
