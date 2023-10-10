import React, { useState } from "react";
import "./styles.css";

export const Todoadd = ({ onAddSuccess }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async () => {
    const currentDate = new Date().toISOString();

    const payload = {
      id: 0,
      title,
      createdAt: currentDate,
      author,
      isDone: true,
      note,
      doneDate: currentDate,
    };

    try {
      const response = await fetch("http://localhost:3333/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Data successfully sent to the server");
        onAddSuccess(payload);
      } else {
        console.log("Failed to send data");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="todo-add-container">
      <div className="todo-add-title">
        <h3>Title</h3>
        <input
          type="text"
          className="todo-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="todo-add-author">
        <h3>Author</h3>
        <input
          type="text"
          className="todo-author-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="todo-add-note">
        <h3>Note</h3>
        <input
          type="text"
          className="todo-note-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="todo-add-buttons">
        <button className="todo-return-button">Cancel</button>
        <button className="todo-add-add-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
