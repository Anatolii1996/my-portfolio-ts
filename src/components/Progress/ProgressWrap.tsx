import React, { FC } from "react";
import { Progress, Space } from "antd";
import "./progress.scss";

interface ProgressWrapProps {
  quantity: number;
}

const ProgressWrap: FC<ProgressWrapProps> = ({ quantity }) => {
  return (
    <Space size={30} wrap>
      <Progress
   
        steps={5}
        percent={quantity}
        showInfo={false}
        size={[20, 15]}
        trailColor="bisque"
      />
    </Space>
  );
};

export default ProgressWrap;
