import React, { FC } from "react";
import { useAppSelector } from "../../hooks";
import { v4 as uuidv4 } from "uuid"

import cn from "classnames";
import "./chat.scss";

const Chat: FC = () => {
  const comments = useAppSelector((state)=>state.comments)
// console.log(comments)
  return (
    <div className="chat_wrap animate__animated animate__fadeInRightBig">
      {comments.map((comment, index) => {
        // console.log(comment)
        // const messageId = comment._id;
        const messageClasses = cn("chat_message", {
          my_message: comment.ipAddress === process.env.REACT_APP_MY_IP,
          "animate__animated animate__fadeInRightBig": index === 0,
        });
        return (
          <div key={uuidv4()} className={messageClasses}>
            <div className="message_author">
              <div className="author_name">
                <p>{comment.name}</p>
                <p>{comment.surname}</p>
              </div>
              <p>{comment.date}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
