import React, { FC, useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCountUser } from "../../redux/countUserSlice";
import { Layout, Menu, theme, Switch } from "antd";
import { Icon } from "@iconify/react";
import { visits } from "../../sagas/firstLoadingSaga";
import { LanguageContext } from "../../context";
import cn from "classnames";
import "./layout.scss";

const { Header, Content, Footer } = Layout;

const LayoutWrap: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("ua");

  useEffect(() => {
    navigate("/");
    dispatch(getCountUser());
  }, []);

  const dispatch = useAppDispatch();
  const countVisit = useAppSelector((state) => state.countUser.values);
  const currentIP = useAppSelector((state) => state.currentIP.value);

  useEffect(() => {
    if (countVisit && currentIP) {
      setLoading(false);
    }
  }, [countVisit, currentIP]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const iconWrapClasses = cn("icon__wrap", {
    // Используем classNames для условных классов
    "animate__animated animate__rotateIn":
      visits && !visits.includes(currentIP),
  });

  const headerIconClasses = cn("header__icon", {
    // Используем classNames для условных классов
    "animate__animated animate__zoomIn": visits && !visits.includes(currentIP),
  });

  const countClasses = cn("header__count", {
    // Используем classNames для условных классов
    "animate__animated animate__bounceInDown":
      visits && !visits.includes(currentIP),
    "animate__animated animate__fadeIn": visits && visits.includes(currentIP),
  });

  const handleSwitchChange = (checked: boolean) => {
    // Update the language state based on the checked value
    setLanguage(checked ? "ua" : "en");
  };

  return (
    <LanguageContext.Provider value={language} >
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
          <Switch
            onChange={handleSwitchChange}
            checkedChildren="en"
            unCheckedChildren="ua"
            defaultChecked
          />
          <div className="header__visitors">
            <div className={iconWrapClasses}>
              <Icon icon="twemoji:star" className={headerIconClasses} />
            </div>
            <p>
              :
              {!loading && (
                <span className={countClasses}>{countVisit.length}</span>
              )}
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
            <a
              href="https://www.instagram.com/a.tkachenko1996/"
              target="_blank"
            >
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
    </LanguageContext.Provider>
  );
};

export default LayoutWrap;
