import React, { useState } from "react";
import "./styles.css";
import { MenuView } from "./MenuView";
import { GameView } from "./GameView";

export const HitTheMole = () => {
  const [startGame, setStartGame] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleStartClick = () => {
    setStartGame(true);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setStartGame(true);
  };

  const handleReturnToMenu = () => {
    setStartGame(false);
  };

  return (
    <div className="hit-the-mole">
      {startGame ? (
        <GameView
          selectedTime={selectedTime}
          handleReturnToMenu={handleReturnToMenu}
        />
      ) : (
        <MenuView
          startGame={startGame}
          handleStartClick={handleStartClick}
          handleTimeSelection={handleTimeSelection}
        />
      )}
    </div>
  );
};
