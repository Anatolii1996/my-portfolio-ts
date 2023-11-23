import React, { FC, useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCountUser } from "../../redux/countUserSlice";
import { Layout, Menu, theme } from "antd";
import { Icon } from "@iconify/react";
import cn from "classnames";
import axios from "axios";
import { IIp } from "../../sagas/types";
import "./layout.scss";

const { Header, Content, Footer } = Layout;

const LayoutWrap: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigate("/");
    dispatch(getCountUser());
  }, []);

  const dispatch = useAppDispatch();
  const countVisit = useAppSelector((state) => state.countUser.values);

  useEffect(() => {
    setLoading(false);
  }, [countVisit]);

  // const [count, setCount] = useState(0);
  const [ip, setIp] = useState<string>("");
  // const [visitsIp, setVisitIp] = useState<string[]>([]);

  useEffect(() => {
    getIp();
    // getVisits();
  }, []);

  const getIp = async () => {
    try {
      const response = await axios.get<IIp>("http://localhost:3002/ip");
      setIp(response.data.ipAddress);
    } catch (e) {
      console.error("Произошла ошибка при запросе:", e);
    }
  };

  // const getVisits = async () => {
  //   try {
  //     const response = await axios.get<string[]>(
  //       "http://localhost:3002/visits"
  //     );
  //     setVisitIp(response.data);
  //     // setLoading(false);
  //   } catch (e) {
  //     console.error("Произошла ошибка при запросе:", e);
  //   }
  // };

  // useEffect(() => {
  //   setCount(visitsIp.length);
  // }, [visitsIp]);

  useEffect(() => {
    if (countVisit && ip.length) {
      if (!countVisit.includes(ip)) {
        // setCount((prev) => prev + 1);

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
  }, [ip]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const headerIconClasses = cn("header__icon", {
  //   // Используем classNames для условных классов
  //   "animate__animated animate__zoomIn":
  //     visitsIp.length && !visitsIp.includes(ip),
  // });

  // const iconWrapClasses = cn("icon__wrap", {
  //   // Используем classNames для условных классов
  //   "animate__animated animate__rotateIn":
  //     visitsIp.length && !visitsIp.includes(ip),
  // });
  // const countClasses = cn("header__count", {
  //   // Используем classNames для условных классов
  //   "animate__animated animate__bounceInDown":
  //     visitsIp.length && !visitsIp.includes(ip),
  //   "animate__animated animate__fadeIn":
  //     visitsIp.length && visitsIp.includes(ip),
  // });

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
          <div
          //  className={iconWrapClasses}
           >
            <Icon icon="twemoji:star" 
            // className={headerIconClasses}
             />
          </div>
          <p>
            :{!loading && <span
            //  className={countClasses}
             >{countVisit.length}</span>}
          </p>
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Outlet />
        </div>
        <ul className="main_icons">
          <li>
            {" "}
            <Icon icon="skill-icons:typescript" />
          </li>
          <li>
            {" "}
            <Icon icon="devicon:react" />
          </li>
          <li>
            {" "}
            <Icon icon="vscode-icons:file-type-js-official" />
          </li>
          <li>
            {" "}
            <Icon icon="logos:ant-design" />
          </li>
          <li>
            {" "}
            <Icon icon="devicon:vscode" />
          </li>
          <li>
            {" "}
            <Icon icon="logos:redux" />
          </li>
          <li>
            {" "}
            <Icon icon="logos:sass" />
          </li>
          <li>
            {" "}
            <Icon icon="vscode-icons:file-type-node" />
          </li>
          <li>
            {" "}
            <Icon icon="skill-icons:expressjs-dark" />
          </li>
          <li>
            {" "}
            <Icon icon="vscode-icons:file-type-mongo" />
          </li>
          <li>
            {" "}
            <Icon icon="devicon:git" />
          </li>
          <li>
            {" "}
            <Icon icon="devicon:github" />
          </li>
        </ul>
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
