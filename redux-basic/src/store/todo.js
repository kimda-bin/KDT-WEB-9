// import { createStore } from "redux";

// //상수의 변수
// export const ADD_TODO = "ADD_TODO";
// export const DELETE_TODO = "DELETE_TODO";

// //리듀서
// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TODO:
//       const newTodo = { text: action.text, id: Date.now() };
//       return [...state, newTodo];
//     case DELETE_TODO:
//       const remove = state.filter((el) => el.id !== action.id);
//       return remove;
//     default:
//       return state;
//   }
// };

// //스토어
// const store = createStore(reducer);

// export default store;
