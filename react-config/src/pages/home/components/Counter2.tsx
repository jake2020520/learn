import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Counter2(props: any) {
  let state = useSelector((state: any) => state.counter2); //获得一部分的状态
  let dispatch = useDispatch(); //获取 dispatch方法
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "ADD2" })}>+</button>
      <button onClick={() => dispatch({ type: "MINUS2" })}>-</button>
    </div>
  );
}
export default Counter2;
