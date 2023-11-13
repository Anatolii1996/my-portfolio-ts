import React, { FC, useEffect, useState } from "react";
import {
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { Icon } from "@iconify/react";
import cn from "classnames";
import axios from "axios";
import { IIp } from "./types";
import "./layout.scss";


const { Header, Content, Footer } = Layout;

const LayoutWrap: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
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
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <div className="footer">
          <a href="https://www.instagram.com/a.tkachenko1996/" target="_blank">
            {" "}
            <Icon icon="skill-icons:instagram" />
          </a>
          <a href="mailto:anatoly.tka4enko2014@gmail.com" target="_blank">
            <Icon icon="logos:google-gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127/"
            target="_blank"
          >
            <Icon icon="devicon:linkedin" />
          </a>
          <a href="https://github.com/Anatolii1996" target="_blank">
            <Icon icon="devicon:github" />
          </a>
          <a href="https://t.me/Anatolii07007" target="_blank">
            {" "}
            <Icon icon="logos:telegram" />
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutWrap;
