import React, { useState } from "react";
import "./styles.css";
import { MenuView } from "./MenuView";
import { GameView } from "./GameView";

export const HitTheMole = () => {
  // Stan gry
  const [startGame, setStartGame] = useState(false);
  // Wybrany czas gry
  const [selectedTime, setSelectedTime] = useState(null);
  // Pozostały czas gry
  const [timeLeft, setTimeLeft] = useState(0);

  // Obsługa kliknięcia przycisku "START"
  const handleStartClick = (time) => {
    setSelectedTime(time);
    setStartGame(true);

    // Rozpocznij odliczanie czasu
    setTimeLeft(time * 60);

    // Ustaw timer
    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // Zakończ grę po upływie czasu
        clearInterval(timerInterval);
        setStartGame(false);
      }
    }, 1000);
  };

  // Obsługa powrotu do menu
  const handleReturnToMenu = () => {
    setStartGame(false);
  };

  return (
    <div className="hit-the-mole">
      {startGame ? (
        // Wyświetl widok gry
        <GameView
          selectedTime={selectedTime}
          handleReturnToMenu={handleReturnToMenu}
          timeLeft={timeLeft}
        />
      ) : (
        // Wyświetl widok menu
        <MenuView
          startGame={startGame}
          handleStartClick={handleStartClick}
          handleTimeSelection={(time) => setSelectedTime(time)}
        />
      )}
    </div>
  );
};
