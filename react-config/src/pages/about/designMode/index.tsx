import React, { useState } from 'react';
import { Button, message } from 'antd';

import styles from '../index.less';


const Factory: React.FC<any> = () => {

  return (
    <div className={styles.container}>
      工厂模式 <Button>Factory</Button>
    </div>
  );
};

export default Factory;
