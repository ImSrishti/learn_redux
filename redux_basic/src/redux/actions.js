import { INCREMENT, DECREMENT, RESET } from "./actionTypes";

export const incCount = content => ({
  type: INCREMENT,
  payload: {
    content
  }
});

export const decCount = content => ({
  type: DECREMENT,
  payload: {
    content
  }
});

export const reset = content => ({
  type: RESET
});
