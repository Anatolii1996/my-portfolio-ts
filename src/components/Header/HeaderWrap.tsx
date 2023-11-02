import React, { useEffect, useState, FC } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, Layout } from "antd";
import cn from "classnames";
import axios from "axios";
import { Icon } from "@iconify/react";
import "./header.scss";
import { IIp } from "../../types/types";
const { Header } = Layout;

const HeaderWrap: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [count, setCount] = useState<number>(0);
  const [ip, setIp] = useState<string>("");
  const [visitsIp, setVisitIp] = useState<string[]>([]);

  useEffect(() => {
    navigate("/");
  }, []);

  useEffect(() => {
    getIp();
    getVisits();
  }, []);

  const getIp = async () => {
    try {
      const response = await axios.get<IIp>("http://localhost:3002/ip");
      setIp(response.data.ipAddress);
    } catch (e) {
      console.error("Произошла ошибка при запросе:", e);
    }
  };

  const getVisits = async () => {
    try {
      const response = await axios.get<string[]>(
        "http://localhost:3002/visits"
      );
      setVisitIp(response.data);
    } catch (e) {
      console.error("Произошла ошибка при запросе:", e);
    }
  };

  useEffect(() => {
    setCount(visitsIp.length);
  }, [visitsIp]);

  useEffect(() => {
    if (visitsIp.length && ip.length) {
      if (!visitsIp.includes(ip)) {
        setTimeout(() => {
          setCount((prev) => prev + 1);
        }, 1300);

        const requestData = {
          ipAddress: ip,
          entryTime: new Date().toUTCString(),
          // Другие данные...
        };

        // Укажите заголовок Content-Type как application/json
        const config = {
          method: "post",
          url: "http://localhost:3002/new-visit",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
        };

        axios(config).catch((error) => {
          console.log(error);
        });
      }
    }
  }, [ip, visitsIp]);

  const headerIconClasses = cn("header__icon", {
    // Используем classNames для условных классов
    "animate__animated animate__zoomIn":
      visitsIp.length && !visitsIp.includes(ip),
  });

  const iconWrapClasses = cn("icon__wrap", {
    // Используем classNames для условных классов
    "animate__animated animate__rotateIn":
      visitsIp.length && !visitsIp.includes(ip),
  });
  const countClasses = cn("header__count", {
    // Используем classNames для условных классов
    "animate__animated animate__bounceInDown":
      visitsIp.length && !visitsIp.includes(ip),
  });

  return (
    <>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          className={`nav-menu `}
        >
          <Menu.Item key="/">
            {" "}
            <Link to="/">Головна</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">Моя історія</Link>
          </Menu.Item>
          <Menu.Item key="/galery">
            {" "}
            <Link to="/galery">Галерея робіт</Link>
          </Menu.Item>
          <Menu.Item key="/technical">
            <Link to="/technical">Технічна частина</Link>
          </Menu.Item>
          <Menu.Item key="/feedback">
            <Link to="/feedback">Зворотній зв'язок</Link>
          </Menu.Item>
        </Menu>
        <div className="header__visitors">
          <div className={iconWrapClasses}>
            <Icon icon="twemoji:star" className={headerIconClasses} />
          </div>
          <p>
            :<span className={countClasses}>{count}</span>{" "}
          </p>
        </div>
      </Header>

      <div className="page_wrap">
        <Outlet />
      </div>
    </>
  );
};

export default HeaderWrap;
