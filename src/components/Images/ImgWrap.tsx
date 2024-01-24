/* eslint-disable */
import React, { FC } from "react";
import { Image } from "antd";
import "./img.scss";

interface ImgWrapProps {
  link: string;
  width: number;
}

const ImgWrap: FC<ImgWrapProps> = ({ link }) => {
  return <Image alt="setifacts" width={300} src={link} />;
};

export default ImgWrap;
