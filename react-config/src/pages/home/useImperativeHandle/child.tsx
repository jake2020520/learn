import React, { useImperativeHandle, RefObject } from 'react';
import { Button, message } from 'antd';

const Child: React.FC<any> = (props, ref) => {
  const inputRef: RefObject<any> = React.useRef();
  useImperativeHandle(ref, () => ({
    // 暴露function、focus结构给父元素
    focus: () => {
      // inputRef.current.focus();
      inputRef.current.value = 'bbbb';
    }
  }));
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default React.forwardRef(Child as any);
