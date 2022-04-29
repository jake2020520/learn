import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputNumber } from "antd";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "@/store/reducers/counterSlice";
import styles from "./counter.less";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <InputNumber
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => {
            incrementAsync(Number(incrementAmount) || 0)(dispatch);
          }}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
