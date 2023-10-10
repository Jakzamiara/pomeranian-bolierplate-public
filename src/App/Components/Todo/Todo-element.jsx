import { Editicon, Ticicon, Trashicon } from "./Todo-icons";
import React, { useState, useEffect } from "react";

export const Todoelement = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3333/api/todo");
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchData();
  }, []);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="todo-element">
      <div className="todo-control-buttons">
        <h2 className="todo-title">{todo.title}</h2>
        <button className="todo-vector">
          <Ticicon />
        </button>
        <button className="todo-edit">
          <Editicon />
        </button>
        <button className="todo-trash">
          <Trashicon />
        </button>
      </div>
      <div className="todo-author">
        <p className="todo-name">{todo.author}</p>
        <p className="todo-date">{todo.date}</p>
      </div>
      <p className="todo-text">{todo.text}</p>
    </div>
  );
};
