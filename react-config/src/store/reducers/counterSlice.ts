import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    storeValue: 0,
    storeString: "storeString",
  },
  reducers: {
    increment: (state) => {
      state.storeValue += 1;
    },
    decrement: (state) => {
      state.storeValue -= 1;
    },
    changeStoreString: (state, action) => {
      state.storeString = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.storeValue += action.payload;
    },
  },
});

export const { increment, decrement, changeStoreString, incrementByAmount } =
  counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: any) => state.counter?.storeValue;

export default counterSlice.reducer;
