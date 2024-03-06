import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../store/atoms/TodoState";
import Todo from "./Todo";
import { todoLength } from "../store/selectors/Totaltodos";

function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputTest, setInputTest] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: Math.random(), text: inputTest }]);
    setInputTest("");
    console.log(todos);
  };

  const onChangeHandler = (e) => {
    setInputTest(e.target.value);
  };

  const handlerClear = () => {
    setTodos([]);
  };

  const TotalStateLength = useRecoilValue(todoLength);

  return (
    <main className="">
      <div className="w-full flex gap-4">
        <h1>{TotalStateLength}</h1>
        <input
          value={inputTest}
          onChange={onChangeHandler}
          className="py-4 px-2 bg-zinc-500 text-white rounded-lg w-96 outline-none "
          type="text"
          id="todoInput"
        />
        <button className=" bg-blue-300 p-4 rounded-md" onClick={addTodo}>
          {" "}
          Add Todo
        </button>
        <button className=" bg-blue-300 p-4 rounded-md" onClick={handlerClear}>
          {" "}
          Clear Todos
        </button>
      </div>
      <div className=" bg-blue-300 rounded-lg mt-10  p-6">
        <Todo />
      </div>
    </main>
  );
}

export default Todos;
