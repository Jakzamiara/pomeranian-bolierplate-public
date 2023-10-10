import React, { useState, useEffect } from "react";
import "./styles.css";
import { Todoelement } from "./Todo-element";
import { Todoadd } from "./Todo-add";

export const Todo = () => {
  const [showTodoAdd, setShowTodoAdd] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3333/api/todo");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddSuccess = async (newTodo) => {
    setTodos([...todos, newTodo]);
    setShowTodoAdd(false);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      {!showTodoAdd ? (
        <div className="main-todo-view">
          <h2 className="todo-todo">TODO</h2>
          <div className="todo-add">
            <button onClick={() => setShowTodoAdd(true)}>+</button>
          </div>
          {todos.map((todo) => (
            <Todoelement key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <Todoadd onAddSuccess={handleAddSuccess} />
      )}
    </div>
  );
};
