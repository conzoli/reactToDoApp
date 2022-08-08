import React from "react";

const Todo = ({ description, done, onChangeTodo, onDeleteTodo, index }) => {
  return (
    <div
      className={
        done
          ? "flex justify-between p-2 items-center bg-green-600 text-white"
          : "flex justify-between p-2 items-center bg-red-500 text-white"
      }
    >
      <h1
        className="text-lg cursor-pointer"
        onClick={() => {
          onChangeTodo(index);
        }}
      >
        {description}
      </h1>
      <button
        className="text-lg bg-gray-400 p-2 text-white"
        onClick={() => {
          onDeleteTodo(index);
        }}
      >
        Löschen
      </button>
    </div>
  );
};

export default Todo;
