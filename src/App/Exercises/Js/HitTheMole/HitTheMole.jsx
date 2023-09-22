import React, { useState } from "react";
import { GameView } from "./GameView";
import { MenuView } from "./MenuView";
import { CongratulationView } from "./Congratulation"; // Dodaj import CongratulationView

export const HitTheMole = () => {
  // Lokalny stan przechowujący informację o rozpoczęciu gry.
  const [startGame, setStartGame] = useState(false);

  // Lokalny stan przechowujący wybrany czas gry.
  const [selectedTime, setSelectedTime] = useState(null);

  // Lokalny stan przechowujący wybraną liczbę kretyków.
  const [selectedMoles, setSelectedMoles] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  // Lokalny stan przechowujący pozostały czas gry.
  const [timeLeft, setTimeLeft] = useState(0);

  // Obsługuje kliknięcie przycisku "START" w menu.
  const handleStartClick = (time, moles) => {
    setSelectedTime(time);
    setSelectedMoles(moles);
    setStartGame(true);

    setTimeLeft(time * 60);

    // Rozpoczyna odliczanie czasu do końca gry.
    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timerInterval);
        setStartGame(false);
      }
    }, 1000);
  };

  // Obsługuje powrót do menu.
  const handleReturnToMenu = () => {
    setStartGame(false);
  };

  // Zwraca zawartość komponentu HitTheMole.
  return (
    <div className="hit-the-mole">
      <p className="header">
        Gra polegająca na podążaniu za krecikiem i trafianiu na kwadrat, w
        którym się pojawił.
      </p>
      {startGame ? (
        // Renderuje komponent GameView, jeśli gra jest rozpoczęta.
        <GameView
          selectedTime={selectedTime}
          handleReturnToMenu={handleReturnToMenu}
          selectedMoles={selectedMoles}
          handleTimeSelection={(time) => setSelectedTime(time)}
        />
      ) : (
        // Renderuje komponent MenuView, jeśli gra nie jest rozpoczęta.
        <MenuView
          startGame={startGame}
          handleStartClick={handleStartClick}
          handleTimeSelection={(time) => setSelectedTime(time)} // Dodaj tę linię
        />
      )}
    </div>
  );
};
