import React, { useEffect, useState, FC } from "react";
import axios from "axios";
import { IComment } from "../../types/types";
import cn from "classnames";
import "./chat.scss";

const Chat: FC<{ chatUpdate: number }> = ({ chatUpdate }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    axios("http://localhost:3002/comments").then((resp) => {
      setComments(resp.data);
    });
  }, [chatUpdate]);

  return (
    <div className="chat_wrap animate__animated animate__fadeInRightBig">
      {comments.map((comment, index) => {
        const messageId = comment._id.toString();
        const messageClasses = cn("chat_message", {
          my_message: comment.ipAddress=== process.env.REACT_APP_MY_IP,
          "animate__animated animate__fadeInRightBig": index === 0,
        });
        return (
          <div key={messageId} className={messageClasses}>
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
