import React from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div className="footer">
        <a href="https://www.instagram.com/a.tkachenko1996/" target="_blank">
          {" "}
          <Icon icon="skill-icons:instagram" />
        </a>
        <a href="mailto:anatoly.tka4enko2014@gmail.com"  target="_blank">
          <Icon icon="logos:google-gmail" />
        </a>
        <a href="https://www.linkedin.com/in/анатолій-ткаченко-5525a7127/"  target="_blank">
          <Icon icon="devicon:linkedin" />
        </a>
        <a href="https://github.com/Anatolii1996"  target="_blank">
          <Icon icon="devicon:github" />
        </a>
        <a href="https://t.me/Anatolii07007"  target="_blank">
          {" "}
          <Icon icon="logos:telegram" />
        </a>
      </div>
    </>
  );
};

export default Footer;
