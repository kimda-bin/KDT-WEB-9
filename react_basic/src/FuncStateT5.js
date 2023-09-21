import { useState } from "react";

export default function FuncStateT5() {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const newTodo = { todo, id };

    setTodoList([...todo, newTodo]);
    const newId = { id } + 1;
    setId(newId);
  };

  const deleteTodo = () => {
    console.log("first");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일 입력.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todoList.map((txt, id) => {
          return (
            <li>
              <input type="checkbox" id={txt.id} />
              {txt.todo}
            </li>
          );
        })}
      </ul>

      <br></br>
      <br></br>

      <button onClick={deleteTodo}>완료된 할 일 삭제</button>
    </div>
  );
}
