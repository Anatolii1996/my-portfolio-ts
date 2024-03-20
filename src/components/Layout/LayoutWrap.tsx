/* eslint-disable */
import React, { FC, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { firstLoading } from "../../redux/countUserSlice";
import { LanguageContext } from "../../context";

import { Layout, Menu, theme, Switch } from "antd";
import { Icon } from "@iconify/react";
import cn from "classnames";
import "./layout.scss";

const { Header, Content, Footer } = Layout;

const LayoutWrap: FC = () => {
  const countVisit = useAppSelector((state) => state.countUsers.value);
  const isBlocked = useAppSelector((state) => state.currentUser.isBlocked);
  const isNewUser = useAppSelector((state) => state.currentUser.isNewUser);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("ua");

 

  useEffect(() => {
    // console.log(isBlocked)
    if (isBlocked) {
      navigate("noAccess");
    }
  }, [isBlocked, dispatch, navigate]);

  useEffect(() => {
    dispatch(firstLoading());
  }, [dispatch]);

  useEffect(() => {
    if (countVisit > 0) {
      setLoading(false);
    }
  }, [countVisit]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const iconWrapClasses = cn("icon__wrap", {
    // Используем classNames для условных классов
    "animate__animated animate__rotateIn": isNewUser,
  });

  const headerIconClasses = cn("header__icon", {
    // Используем classNames для условных классов
    "animate__animated animate__zoomIn": isNewUser,
  });

  const countClasses = cn("header__count", {
    // Используем classNames для условных классов
    "animate__animated animate__bounceInDown": isNewUser,
    "animate__animated animate__fadeIn": !isNewUser,
  });

  const handleSwitchChange = (checked: boolean) => {
    // Update the language state based on the checked value
    setLanguage(checked ? "ua" : "en");
  };

  return (
    <LanguageContext.Provider value={language}>
      <Layout className="layout">
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            className={`nav-menu `}
          >
            <Menu.Item key="/">
              {language === "ua" ? (
                <Link to="/">Головна</Link>
              ) : (
                <Link to="/">Main</Link>
              )}
            </Menu.Item>
            <Menu.Item key="/galery">
              {language === "ua" ? (
                <Link to="/galery">Галерея робіт</Link>
              ) : (
                <Link to="/galery">Gallery of works</Link>
              )}
            </Menu.Item>
            <Menu.Item key="/technical">
              {language === "ua" ? (
                <Link to="/technical">Технічна частина</Link>
              ) : (
                <Link to="/technical">Technical part</Link>
              )}
            </Menu.Item>
           
          </Menu>
          <Switch
            onChange={handleSwitchChange}
            checkedChildren="en"
            unCheckedChildren="ua"
            defaultChecked
          />
        
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
            <a
              href="https://www.instagram.com/a.tkachenko1996/"
              aria-label="instagram"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Icon icon="skill-icons:instagram" />
            </a>
            <a
              href="mailto:anatoly.tka4enko2014@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="gmail"
            >
              <Icon icon="logos:google-gmail" />
            </a>
            <a
              href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <Icon icon="devicon:linkedin" />
            </a>
            <a
              href="https://github.com/Anatolii1996"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <Icon icon="devicon:github" />
            </a>
            <a
              href="https://t.me/Anatolii07007"
              target="_blank"
              rel="noreferrer"
              aria-label="telegram"
            >
              {" "}
              <Icon icon="logos:telegram" />
            </a>
          </div>
        </Footer>
      </Layout>
    </LanguageContext.Provider>
  );
};

export default LayoutWrap;
