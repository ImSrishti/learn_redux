import { INCREMENT, DECREMENT, RESET } from "../actionTypes";

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const { content } = action.payload;
      return {
        ...state,
        counter: state.counter + Number(content)
      };
    }
    case DECREMENT: {
      const { content } = action.payload;
      return {
        ...state,
        counter: state.counter - Number(content)
      };
    }
    case RESET: {
      return {
        ...state,
        counter: 0
      };
    }
    default:
      return state;
  }
}
