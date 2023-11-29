import React, { FC, useState, useRef } from "react";
import { ConfigProvider, Popover } from "antd";
import { IPopover } from "./types";
import "./popover.scss";

const text = <span>Technologies:</span>;

const PopoverWrap: FC<IPopover> = ({ content, children, comment }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popoverContentRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    //     // Check if the cursor is inside the popover content
    //     const isCursorInsidePopoverContent =
    //       popoverContentRef.current &&
    //       e.relatedTarget instanceof Node &&
    //       popoverContentRef.current.contains(e.relatedTarget);
    // // console.log(isCursorInsidePopoverContent)
    //     // Close the popover if the cursor is outside the trigger element and not inside the popover content
    //     if (!wrapperRef.current || (!isCursorInsidePopoverContent && !wrapperRef.current.contains(e.relatedTarget as HTMLElement))) {
    //       setPopoverVisible(false);
    //     }
    setPopoverVisible(false);
  };

  const contentItems = (
    <div
      className="popover_content"
      ref={popoverContentRef}
      
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
      <div className="demo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={wrapperRef}>
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
