import React, { FC } from "react";
import {  ConfigProvider, Popover } from "antd";
import { IPopover } from "./types";
import "./popover.scss";

const text = <span>Technologies:</span>;

// const buttonWidth = 80;

const PopoverWrap: FC<IPopover> = ({ content, children, comment }) => {
  const contentItems = (
    <div className="popover_content" 
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
    <ConfigProvider >
      <div className="demo">
        <div>
          <Popover
          //  visible={true}
            placement="right" title={text} content={contentItems} >
            {children}
          </Popover>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default PopoverWrap;
