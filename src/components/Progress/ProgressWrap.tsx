import React, {FC} from 'react';
import { Progress, Space } from 'antd';

const ProgressWrap:FC = () => {
  return (
    <Space size={30} wrap>
      <Progress steps={5} percent={50} showInfo={false} />      
    </Space>
  )
}

export default ProgressWrap;