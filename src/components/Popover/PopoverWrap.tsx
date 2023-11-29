import React, { useMemo, useState, FC } from "react";
import { Button, ConfigProvider, Popover, Segmented } from "antd";
import { IPopover } from "./types";

const text = <span>Technologies:</span>;

// const buttonWidth = 80;

const PopoverWrap: FC<IPopover> = ({ content, children, comment }) => {
  const contentItems = (
    <>
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
    </>
  );

  return (
    <ConfigProvider>
      <div className="demo">
        <div>
          <Popover placement="right" title={text} content={contentItems}>
            {children}
          </Popover>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default PopoverWrap;
