import React, { useState, useEffect } from "react";
import "./styles.css";
import { Todoelement } from "./Todo-element";
import { Todoadd } from "./Todo-add";

export const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showTodoAdd, setShowTodoAdd] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const startEditing = (id) => {
    setEditingTodoId(id);
    setIsEditing(true);
    setShowTodoAdd(true);
  };

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
    if (isEditing) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodoId ? newTodo : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditingTodoId(null);
    } else {
      setTodos([...todos, newTodo]);
    }
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
            <Todoelement
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onEdit={startEditing}
            />
          ))}
        </div>
      ) : (
        <Todoadd
          onAddSuccess={handleAddSuccess}
          todo={todos.find((t) => t.id === editingTodoId)}
          isEditing={isEditing}
          editingTodoId={editingTodoId}
        />
      )}
    </div>
  );
};
