/* eslint-disable */
import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { IComment } from "../../redux/types";
import { v4 as uuidv4 } from "uuid";
import { Empty } from "antd";
import cn from "classnames";
import moment from "moment";
import { Icon } from "@iconify/react";
import { deleteComment } from "../../redux/chatSlice";
import "./chat.scss";

const Chat: FC = () => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => state.comments.messages);
  const isOwner = useAppSelector((state) => state.isOwner.value);

  const isNewMessage = useAppSelector((state) => state.comments.isNewMessage);

  const blockUser = (comment: IComment) => {
    dispatch(deleteComment(comment));
  };

  return (
    <div className="chat_wrap animate__animated animate__fadeInRightBig">
      {comments.length ? (
        comments.map((comment, index) => {
          const messageClasses = cn("chat_message", {
            my_message:comment.isOwnerAuthor,              
            "animate__animated animate__fadeInRightBig":
              index === 0 && isNewMessage,
          });
          return (
            <div key={uuidv4()} className={messageClasses}>
              <div className="message_author">
                <div className="author_name">
                  <p>{comment.name}</p>
                  <p>{comment.surname}</p>
                </div>
                <div className="massage_date">
                  <p>{comment.date}</p>
                  {/* {(function () {
                    if (
                      comment.ipAddress !== process.env.REACT_APP_MY_IP &&
                      comment.ipAddress !== process.env.REACT_APP_MY_MOBILE_IP
                    ) {
                      if (
                        currentIp === process.env.REACT_APP_MY_IP ||
                        currentIp === process.env.REACT_APP_MY_MOBILE_IP
                      ) {
                        return (
                          <Icon
                            icon="icomoon-free:cross"
                            onClick={() => blockUser(comment)}
                          />
                        );
                      }
                    }
                  })()} */}
                </div>
              </div>
              <p>{comment.comment}</p>
            </div>
          );
        })
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={<span>Не вдалося завантажити коментарі</span>}
        ></Empty>
      )}
    </div>
  );
};

export default Chat;
