//리덕스를 이용한 숫자증가, 감소 코드
import { createStore } from "redux";

////////////////////////실습////////////////////////
const addTodo = document.querySelector("#addTodo"); //button
const todo = document.querySelector("input"); //input
const todoList = document.querySelector("ul"); //ul
const form = document.querySelector("form"); //form
//const deleteTodo = document.querySelector("#deleteTodo");

////////////////////////해설////////////////////////

//상수의 변수

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [...state, newTodo];
    case DELETE_TODO:
      const remove = state.filter((el) => el.id !== action.id);
      return remove;
    default:
      return state;
  }
};

const store = createStore(reducer);

//store.subscribe(() => console.log(store.getState()));

store.subscribe(() => {
  const todos = store.getState();
  todoList.innerHTML = "";
  todos.map((value) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", removeTodo);
    li.id = value.id;
    li.innerText = value.text;
    li.appendChild(btn);
    todoList.appendChild(li);
  });
});

//todo 삭제
const removeTodo = (event) => {
  event.preventDefault();
  //console.log(event.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id: Number(event.target.parentNode.id) });
};

//todo 추가
form.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch({ type: ADD_TODO, text: todo.value });
  todo.value = "";
});

////////////////////////////////////////////////

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const todoReducer = (state = todoList, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return todoList.appendChild(todo);
//     case DELETE_TODO:
//       return;
//     default:
//       return state;
//   }
// };

// const todoStore = createStore(todoReducer);

// todoStore.subscribe(() => {
//   todoList.children = todoStore.getState();
// });

// addTodo.addEventListener("click", () => {
//   // todoStore.dispatch({ type: ADD_TODO });
//   const li = document.createElement("li");
//   li.innerHTML = `${todo.value} <button id="deleteTodo">DEL</button>`;
//   todoList.appendChild(li);
// });
// const deleteTodo = document.querySelector("#deleteTodo");

//deleteTodo.addEventListener("click", () => {});

////////////////////////연습////////////////////////
// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// const ADD = "ADD";
// const MINUS = "MINUS";

// //리듀서
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// //store는 데이터를 넣는 곳
// //createStore: store 생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

// // countStore.dispatch({ type: "ADD" });
// // console.log(countStore.getState());

// //subscribe()는 데이터와 저장소가 변경될때마다 콜백함수를 실행
// countStore.subscribe(() => {
//   //getState()는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
//   num.textContent = countStore.getState();
// });

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

//자바스크립트를 이용한 숫자증가, 감소 코드
// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// let count = 0;

// add.addEventListener("click", () => {
//   count = count + 1;
//   num.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count = count - 1;
//   num.textContent = count;
// });
