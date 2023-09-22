import React, { useState } from "react";
import { MenuView } from "./MenuView"; // Importuj MenuView z odpowiedniego pliku

export const CongratulationView = ({
  score,
  time,
  moles,
  handleRestartGame,
  handleTimeSelection,
  handleResetGame, // Dodaj tę prop
}) => {
  const handleRestartClick = () => {
    handleRestartGame();
    handleResetGame(); // Wywołaj funkcję resetowania stanu gry
  };

  return (
    <div className="congratulation-view">
      <div className="congratulation-message">
        <p>
          Gratulacje! Twój wynik to {score} złapane krety w czasie {time} minut
          z {moles} kretami.
        </p>
      </div>
      <div className="menu-view">
        <MenuView
          startGame={false}
          handleStartClick={handleRestartClick}
          handleTimeSelection={handleTimeSelection}
        />
      </div>
    </div>
  );
};