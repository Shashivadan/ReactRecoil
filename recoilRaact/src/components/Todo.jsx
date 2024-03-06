import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../store/atoms/TodoState";

function Todo() {
  const [todos, setTodos] = useRecoilState(todoState);
  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((p) => p.id != id));
  };
  return (
    <>
      {todos.map((ele, idx) => {
        return (
          <div className="flex p-2 gap-2">
            <p
              className="w-full bg-slate-400 rounded-md p-3 mb-1 "
              key={ele.id}
            >
              <span className="p-1 rounded-full mr-2 bg-red-400 ">{idx}</span>
              {ele.text}
            </p>
            <button
              className=" rounded-md bg-slate-500 h-7 p-2"
              onClick={() => deleteTodos(ele.id)}
            >
              {" "}
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
