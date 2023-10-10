import { Editicon, Ticicon, Trashicon } from "./Todo-icons";
import React, { useState } from "react";
import "./styles.css";

export const Todoelement = () => {
  return (
    <div className="todo-element">
      <div className="todo-control-buttons">
        <h2 className="todo-title">Kupić spray na kleszcze</h2>
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
        <p className="todo-name">Wojtek</p>
        <p className="todo-date">10.04.2024, 11:30</p>
      </div>
      <p className="todo-text">
        Pamiętać, żeby sprawdzić skład i termin ważności preparatu. Zadzwonić do
        weta, żeby się upewnić, czy mają na stanie.
      </p>
    </div>
  );
};
