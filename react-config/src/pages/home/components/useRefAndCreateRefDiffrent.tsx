import React, { useRef, useState, createRef, RefObject } from 'react';
import { Button, Tooltip } from 'antd';
/* 
useRef还有一个很重要的作用就是缓存数据，我们知道usestate ,
useReducer 是可以保存当前的数据源的，
但是如果它们更新数据源的函数执行必定会带来整个组件从新执行到渲染，
如果在函数组件内部声明变量，则下一次更新也会重置，
如果我们想要悄悄的保存数据，而又不想触发函数的更新，
那么useRef是一个很棒的选择。
useRef 仅能用在 FunctionComponent，createRef 仅能用在 ClassComponent。

useRef 返回一个可变的 ref 对象，其 .current 
属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用

随着render重新渲染，createRef的值也每次都重新渲染了。而useRef只初始化了一次，所以才最后显示1。
*/
export const UseRefAndCreateRefDiffrent = () => {
  const [renderIndex, setRenderIndex] = useState(0);
  const refFromUseRef: RefObject<any> = useRef(null);
  const refFromCreateRef: RefObject<any> = createRef();
  if (!refFromUseRef.current) {
    // @ts-ignore
    refFromUseRef.current = renderIndex;
  }
  console.log('-refFromUseRef, refFromCreateRef-: ', refFromUseRef, refFromCreateRef);
  if (!refFromCreateRef.current) {
    // @ts-ignore
    refFromCreateRef.current = renderIndex;
  }

  const inputEl: RefObject<any> = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };

  const content = `useRef还有一个很重要的作用就是缓存数据，我们知道usestate ,
  useReducer 是可以保存当前的数据源的，但是如果它们更新数据源的函数执行必定会带来整个组件从新执行到渲染，如果在函数组件内部声明变量，
  则下一次更新也会重置，如果我们想要悄悄的保存数据，而又不想触发函数的更新，那么useRef是一个很棒的选择。
  useRef 仅能用在 FunctionComponent，createRef 仅能用在 ClassComponent。
  useRef 返回一个可变的 ref 对象，其 .current 
  属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
  createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用
  随着render重新渲染，createRef的值也每次都重新渲染了。而useRef只初始化了一次，所以才最后显示1。`;

  /* 
  script start

script end
  promise1
promise2
setTimeout
  */

  return (
    <div>
      <p>current render index is: {renderIndex}</p>
      <p>refFromUseRef render index is: {refFromUseRef.current}</p>
      <p>refFromCreateRef render index is: {refFromCreateRef.current}</p>

      <Tooltip title={content} trigger="hover">
        <Button
          onClick={() => {
            setRenderIndex(prev => prev + 1);
          }}
        >
          增加render index
        </Button>
      </Tooltip>

      <input ref={inputEl} type="text" />
      <Button onClick={onButtonClick}>Focus the input</Button>
    </div>
  );
};
