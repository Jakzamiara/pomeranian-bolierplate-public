import React, { useState, useEffect } from "react";
import { GameView } from "./GameView";
import { MenuView } from "./MenuView";

export const HitTheMole = () => {
  const [startGame, setStartGame] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMoles, setSelectedMoles] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleStartClick = (time, moles) => {
    setSelectedTime(time);
    setSelectedMoles(moles);
    setStartGame(true);

    setTimeLeft(time * 60);

    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timerInterval);
        setStartGame(false);
      }
    }, 1000);
  };

  const handleReturnToMenu = () => {
    setStartGame(false);
  };

  return (
    <div className="hit-the-mole">
      <p className="header">
        Gra polegająca na podążaniu za krecikiem i trafianiu na kwadrat, w
        którym się pojawił.
      </p>
      {startGame ? (
        <GameView
          selectedTime={selectedTime}
          handleReturnToMenu={handleReturnToMenu}
          selectedMoles={selectedMoles}
        />
      ) : (
        <MenuView
          startGame={startGame}
          handleStartClick={handleStartClick}
          handleTimeSelection={(time) => setSelectedTime(time)}
        />
      )}
    </div>
  );
};
