import React, { useState } from 'react';
import { Button, message } from 'antd';

import styles from './index.less';

const App: React.FC<any> = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value: any) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <div className={styles.container}>
      这个数 Nav1 de 内容 <Button>Nav1</Button>
    </div>
  );
};

export default App;
