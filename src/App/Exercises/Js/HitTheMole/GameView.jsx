import React, { useState, useEffect } from "react";
import { MoleIcon } from "./moleicon";

export const GameView = ({
  selectedTime,
  handleReturnToMenu,
  selectedMoles,
}) => {
  // Funkcja generująca losowe pozycje kretyków na planszy.
  const generateRandomPosition = (numMoles) => {
    const positions = Array(10).fill(false);
    for (let i = 0; i < numMoles; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 10);
      } while (positions[randomIndex]);
      positions[randomIndex] = true;
    }
    return positions;
  };

  // Stan przechowujący pozycje kretyków na planszy.
  const [molePositions, setMolePositions] = useState(
    Array(10)
      .fill(false)
      .map(() => generateRandomPosition(selectedMoles))
  );

  // Stan przechowujący liczbę kliknięć gracza.
  const [clickCount, setClickCount] = useState(0);

  // Stan określający, czy gra jest uruchomiona.
  const [isGameRunning, setIsGameRunning] = useState(true);

  // Stan etykiety przycisku "STOP" lub "START".
  const [stopButtonLabel, setStopButtonLabel] = useState("STOP");

  // Stan przechowujący informacje o kliknięciach gracza na komórki planszy.
  const [cellClicked, setCellClicked] = useState(Array(10).fill(false));

  // Stan pozostałego czasu gry w sekundach.
  const [remainingTime, setRemainingTime] = useState(selectedTime * 60);

  // Funkcja aktualizująca pozycje kretyków na planszy.
  const updateMolePositions = () => {
    if (isGameRunning) {
      setMolePositions(generateRandomPosition(selectedMoles));
    }
  };

  // Obsługuje kliknięcie na kreta lub puste pole.
  const handleMoleClick = (index) => {
    if (isGameRunning) {
      if (molePositions[index]) {
        // Zwiększa liczbę trafień gracza.
        setClickCount(clickCount + 1);

        // Oznacza komórkę jako trafioną.
        setCellClicked((prev) => {
          const updatedCells = [...prev];
          updatedCells[index] = true;
          return updatedCells;
        });

        // Po krótkim czasie przywraca komórkę do stanu nieklikniętej.
        setTimeout(() => {
          setCellClicked((prev) => {
            const updatedCells = [...prev];
            updatedCells[index] = false;
            return updatedCells;
          });
        }, 100);
      } else {
        // Jeśli gracz kliknął w puste pole, a nie kreta.

        // Upewnij się, że wynik nie spada poniżej 0.
        if (clickCount > 0) {
          setClickCount(clickCount - 1);
        }

        // Oznacza komórkę jako trafioną mimo że jeśli gracz kliknął w puste pole.
        setCellClicked((prev) => {
          const updatedCells = [...prev];
          updatedCells[index] = true;
          return updatedCells;
        });

        // Po krótkim czasie przywraca komórkę do stanu nieklikniętej.
        setTimeout(() => {
          setCellClicked((prev) => {
            const updatedCells = [...prev];
            updatedCells[index] = false;
            return updatedCells;
          });
        }, 100);
      }
    }
  };

  // Funkcja obsługująca przycisk "STOP" lub "START".
  const toggleGame = () => {
    if (isGameRunning) {
      // Jeśli gra była uruchomiona, wraca do menu.
      handleReturnToMenu();
    } else {
      // Jeśli gra była zatrzymana, rozpoczyna nową grę.
      setIsGameRunning(!isGameRunning);
    }
  };

  // Efekt uboczny, który aktualizuje pozycje kretyków na planszy w określonym interwale czasowym.
  useEffect(() => {
    const intervalId = setInterval(updateMolePositions, 800);

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameRunning, selectedMoles]);

  // Efekt uboczny, który odlicza czas do zakończenia gry.
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (remainingTime > 0 && isGameRunning) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timerInterval);
        setIsGameRunning(false);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime, isGameRunning]);

  // Obliczenia minut i sekund pozostałego czasu.
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  // Zwraca zawartość komponentu GameView.
  return (
    <div className="game-view">
      <div className="grid-options">
        <div className="time-to-end">
          <p>CZAS DO KOŃCA</p>
          <div className="time-time">
            {minutes < 10 ? "0" : ""}
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </div>
        </div>
        <hr />
        <div className="result-result">
          <p>WYNIK</p>
          <div className="result">{clickCount}</div>
        </div>
        <hr />
        <div className="start-control">
          <p>PRZYCISK STREUJĄCY</p>
          <div
            className={`start-start ${
              stopButtonLabel === "START"
                ? "green-background"
                : "red-background"
            }`}
            onClick={toggleGame}
          >
            {stopButtonLabel}
          </div>
        </div>
      </div>
      <div className="grid-game">
        {molePositions.map((isMole, index) => (
          <div
            key={index}
            className={`grid-game-cell ${
              cellClicked[index]
                ? isMole
                  ? "green-background"
                  : "red-background"
                : ""
            }`}
            onClick={() => handleMoleClick(index)}
          >
            {isMole ? <MoleIcon className="centered-mole" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};
