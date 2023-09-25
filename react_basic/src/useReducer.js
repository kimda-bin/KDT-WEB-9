import { useReducer } from "react";

//초기값
const initialState = { count: 0 };

//reducer 함수(상태,액션)을 받아 새로운 상태를 반환하는 함수
//reducer(state, action), 액션에는 type이 존재
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("error");
  }
}
export default function Counter2() {
  //reducer: state를 업데이트하는 함수
  //state: 현재상태
  //dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
