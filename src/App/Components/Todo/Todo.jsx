import React, { useState, useEffect } from "react";
import "./styles.css";
import { Todoelement } from "./Todo-element";
import { Todoadd } from "./Todo-add";
import { Todocongrats } from "./Todo-congrats";

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

  const handleReturn = () => {
    setShowTodoAdd(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddSuccess = async () => {
    await fetchData();
    setShowTodoAdd(false);
    setIsEditing(false);
    setEditingTodoId(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    fetchData();
  };

  return (
    <div className="app-container">
      {!showTodoAdd ? (
        <div className="main-todo-view">
          <h2 className="todo-todo">TODO</h2>
          <div className="todo-add">
            <p>Tutaj znajdziesz listę swoich zadań.</p>
            <button
              className="todo-add-buttonnn"
              onClick={() => setShowTodoAdd(true)}
            >
              +
            </button>
          </div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Todoelement
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onEdit={startEditing}
              />
            ))
          ) : (
            <Todocongrats onAddButtonClick={() => setShowTodoAdd(true)} />
          )}
        </div>
      ) : (
        <Todoadd
          onAddSuccess={handleAddSuccess}
          todo={todos.find((t) => t.id === editingTodoId)}
          isEditing={isEditing}
          editingTodoId={editingTodoId}
          onReturn={handleReturn}
        />
      )}
      {todos.length > 0 && !showTodoAdd && (
        <button
          className="todo-add-button-down"
          onClick={() => setShowTodoAdd(true)}
        >
          DODAJ
        </button>
      )}
    </div>
  );
};
