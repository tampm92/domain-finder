import { Result } from 'antd';
import React from 'react'

export default ({error}) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, Can't find any domains."
    />
  );
}
