/* eslint-disable */
import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { IComment } from "../../redux/types";
import { deleteComment } from "../../redux/chatSlice";

import { v4 as uuidv4 } from "uuid";
import { Empty } from "antd";
import cn from "classnames";
import { Icon } from "@iconify/react";
import "./chat.scss";

const Chat: FC = () => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => state.comments.messages);
  const isOwner = useAppSelector((state) => state.isOwner.value);

  const isNewMessage = useAppSelector((state) => state.comments.isNewMessage);

  const blockUser = (comment: IComment) => {
    dispatch(deleteComment(comment));
  };

  const updatedComment = comments.map((comment) => {
    const isOwnerAuthor = comment.isOwnerAuthor ?? isOwner;

    return {
      ...comment,
      isOwnerAuthor,
    };
  });

  return (
    <div className="chat_wrap animate__animated animate__fadeInRightBig">
      {updatedComment.length ? (
        updatedComment.map((comment, index) => {
          const messageClasses = cn("chat_message", {
            my_message: comment.isOwnerAuthor,
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
                  {(function () {
                    if (!comment.isOwnerAuthor) {
                      if (isOwner) {
                        return (
                          <Icon
                            icon="icomoon-free:cross"
                            onClick={() => blockUser(comment)}
                          />
                        );
                      }
                    }
                  })()}
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
