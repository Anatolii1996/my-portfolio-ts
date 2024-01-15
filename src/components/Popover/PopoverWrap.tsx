/* eslint-disable */
import React, { FC, useState, ReactNode } from "react";
import { ConfigProvider, Popover } from "antd";
import { IPopover } from "./types";
import { Icon } from "@iconify/react";
import chartLogo from "../../assets/chartJS.png";
import "./popover.scss";

const text = <span>Technologies:</span>;

const PopoverWrap: FC<IPopover> = ({ content, children, comment }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setPopoverVisible(false);
  };

  const popoverContent: Record<string, ReactNode> = {
    HTML:<Icon icon="skill-icons:html" />,
    Sass:<Icon icon="skill-icons:sass" />,
    JavaScript: <Icon icon="logos:javascript" />,
    React: <Icon icon="devicon:react" />,
    Redux: <Icon icon="logos:redux" />,
    "Redux-Saga": <Icon icon="logos:redux-saga" />,
    Bootstrap: <Icon icon="logos:bootstrap" />,
    Firebase: <Icon icon="logos:firebase" />,
    Netlify: <Icon icon="logos:netlify-icon" />,
    "GitHub Pages": <Icon icon="icon-park:github" />,
    "Ant Design": <Icon icon="logos:ant-design" />,
    "Chart.js": <img src={chartLogo} alt="ChartJS" />,
  };

  const contentItems = (
    <div className="popover_content" onMouseEnter={handleMouseLeave}>
      <div>
        {content.map((el) => {
          return (
            <div key={el} className="techItem">
              {popoverContent[el]}
              <p>{el}</p>;
            </div>
          );
        })}
      </div>
      {comment && (
        <div>
          <h4>Comment:</h4>
          {comment?.map((el) => {
            return <p key={el}>{el}</p>;
          })}
        </div>
      )}
    </div>
  );

  return (
    <ConfigProvider>
      <div
        className="demo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Popover
          open={isPopoverVisible}
          placement="right"
          title={text}
          content={contentItems}
        >
          {children}
        </Popover>
      </div>
    </ConfigProvider>
  );
};

export default PopoverWrap;
