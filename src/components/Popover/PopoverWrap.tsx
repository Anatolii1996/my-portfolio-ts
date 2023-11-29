import React, { FC, useState } from "react";
import { ConfigProvider, Popover } from "antd";
import { IPopover } from "./types";
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

  const contentItems = (
    <div
      className="popover_content"
      onMouseEnter={handleMouseLeave}
    >
      <div>
        {content.map((el) => {
          return <p key={el}>{el}</p>;
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
