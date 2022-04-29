import React, { useRef, useState, useEffect } from 'react';
import { Button, message } from 'antd';

function Example() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [person, setPerson] = useState({ name: 'jimmy', age: 22 });
  /*  
  useRef还有一个很重要的作用就是缓存数据，我们知道usestate ,
  useReducer 是可以保存当前的数据源的，
  但是如果它们更新数据源的函数执行必定会带来整个组件从新执行到渲染，
  如果在函数组件内部声明变量，则下一次更新也会重置，
  如果我们想要悄悄的保存数据，而又不想触发函数的更新，
  那么useRef是一个很棒的选择。
  useRef 仅能用在 FunctionComponent，createRef 仅能用在 ClassComponent。
  */
  let lastNumberRef = useRef(0);
  const refNumA: any = useRef();

  console.log('-Example-lastNumberRef-', lastNumberRef);
  let alertNumber = () => {
    setTimeout(() => {
      alert(`number:${number} lastNumberRef: ${lastNumberRef.current}`);
    }, 3000);
  };

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我是');
    }, 1000);
  });

  /* 错误用法 ，effect不支持直接 async await*/
  useEffect(() => {
    /* 请求数据 */
    const getDataU = async () => {
      const aa = await getData;
      console.log('-aa-', aa);
    };
    getDataU();
    setTimeout(() => {
      console.log('-refNumA-: ', refNumA.current.click);
      refNumA.current.click();
    }, 2000);
  }, []);

  return (
    <div>
      <p>You clicked {count} count</p>
      <p>You clicked {number} number</p>
      <p>You clicked {JSON.stringify(person)} number</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        clicked count
      </Button>
      <Button
        style={{ marginLeft: '10px' }}
        type="primary"
        ref={refNumA}
        onClick={() =>
          setNumber(() => {
            console.log('-setNumber-', lastNumberRef);
            lastNumberRef.current = lastNumberRef.current + 1;
            return number + 1;
          })
        }
      >
        clicked number ref
      </Button>
      <Button style={{ marginLeft: '10px' }} type="primary" onClick={() => setPerson({ ...person, name: 'chimmy' })}>
        clicked setPerson
      </Button>

      <button onClick={alertNumber}>alert</button>
    </div>
  );
}
export default Example;
