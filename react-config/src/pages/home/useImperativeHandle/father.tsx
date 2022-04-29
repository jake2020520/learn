import React, { useEffect, RefObject } from 'react';
import { Button, message } from 'antd';
import Child from './child';

const FatherRef: React.FC<any> = () => {
  const childRef: RefObject<any> = React.useRef(null);
  //   useEffect(() => {
  //     childRef.current.focus();
  //   }, []);
  const getFocus = () => {
    childRef.current.focus();
  };
  return (
    <div>
      获取子函数里面的dom: <Button onClick={getFocus}>getFocus child input focus</Button>
      <Child ref={childRef} />
    </div>
  );
};

export default FatherRef;
