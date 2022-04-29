import React, { useState } from "react";
import { Button, Input } from "antd";
import styles from "./index.less";
import TvDialog from "../tvDialog";
/* 

*/
export const HeaderHost = () => {
  const [renderIndex, setRenderIndex] = useState(0);

  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>数据列表</div>
      <Input style={{ width: "200px" }} placeholder="请输入关键字" />
      <TvDialog />
      <Button onClick={onButtonClick}>刷新</Button>
    </div>
  );
};
export default HeaderHost;
