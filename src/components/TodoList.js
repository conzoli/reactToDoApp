import React from "react";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [opencount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("items");
    const parsed = JSON.parse(items);
    return parsed || [];
  });
  const [textinput, settextinput] = useState("");

  const changeText = (e) => {
    settextinput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    const newTodos = [...todos, { description: textinput, done: false }];

    setTodos(newTodos);

    settextinput("");
  };

  const changeTodo = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  // react Hook "useEffect":
  useEffect(() => {
    const countOpen = () => {
      const doneTodos = todos.filter((item) => {
        return !item.done;
      });

      countOpenTodos(doneTodos.length);
    };

    countOpen();

    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white text-3xl py-4 font-semibold">
        <h1>Unsere Todo's:</h1>
        <h2>Offene Todo's: {opencount} </h2>

        <form className="grid grid-cols-3 ">
          <input
            type="text"
            placeholder="Neues Todo"
            value={textinput}
            className="col-span-2 py-2 text-gray-900 "
            onChange={changeText}
          ></input>
          <input
            type="submit"
            className="col-span-1 text-white bg-gray-400 py-2 cursor-pointer"
            value="Add todo"
            onClick={submit}
          ></input>
        </form>
      </div>
      {todos.map((item, index) => {
        return (
          <Todo
            description={item.description}
            done={item.done}
            key={index}
            index={index}
            onChangeTodo={changeTodo}
            onDeleteTodo={deleteTodo}
          ></Todo>
        );
      })}
    </div>
  );
};

export default TodoList;
