import React, { useState, useEffect } from "react";
import { MoleIcon } from "./moleicon";

export const GameView = ({ selectedTime, handleReturnToMenu }) => {
  // Stan gry
  const [molePositions, setMolePositions] = useState(Array(10).fill(false)); // Pozycje kretów
  const [clickCount, setClickCount] = useState(0); // Licznik trafionych kretów
  const [isGameRunning, setIsGameRunning] = useState(true); // Flaga, czy gra jest uruchomiona
  const [stopButtonLabel, setStopButtonLabel] = useState("STOP"); // Etykieta przycisku START/STOP
  const [cellClicked, setCellClicked] = useState(Array(10).fill(false)); // Tablica reprezentująca, czy komórka została kliknięta
  const [remainingTime, setRemainingTime] = useState(selectedTime * 60); // Pozostały czas gry w sekundach

  // Funkcja do generowania losowej pozycji kreta
  const generateRandomPosition = () => {
    return Math.floor(Math.random() * 10);
  };

  // Funkcja aktualizująca pozycje kretów w planszy
  const updateMolePositions = () => {
    if (isGameRunning) {
      const newMolePositions = Array(10).fill(false);
      newMolePositions[generateRandomPosition()] = true;
      setMolePositions(newMolePositions);
    }
  };

  // Funkcja obsługująca kliknięcie kreta
  const handleMoleClick = (index) => {
    if (isGameRunning) {
      if (molePositions[index]) {
        // Jeśli trafiono kreta, zwiększ licznik
        setClickCount(clickCount + 1);
        // Zaznacz komórkę jako klikniętą na chwilę
        setCellClicked((prev) => {
          const updatedCells = [...prev];
          updatedCells[index] = true;
          return updatedCells;
        });
        setTimeout(() => {
          // Po chwili odznacz komórkę
          setCellClicked((prev) => {
            const updatedCells = [...prev];
            updatedCells[index] = false;
            return updatedCells;
          });
        }, 100);
      } else {
        // Jeśli chybiłeś, zaznacz komórkę jako klikniętą na chwilę
        setCellClicked((prev) => {
          const updatedCells = [...prev];
          updatedCells[index] = true;
          return updatedCells;
        });
        setTimeout(() => {
          // Po chwili odznacz komórkę
          setCellClicked((prev) => {
            const updatedCells = [...prev];
            updatedCells[index] = false;
            return updatedCells;
          });
        }, 100);

        // Zmniejsz licznik, jeśli chybiłeś
        setClickCount(clickCount - 1);
      }
    }
  };

  // Funkcja do rozpoczęcia lub zakończenia gry
  const toggleGame = () => {
    if (isGameRunning) {
      // Jeśli gra była uruchomiona, wróć do menu
      handleReturnToMenu();
    } else {
      // Jeśli gra była zatrzymana, wznow ją
      setIsGameRunning(!isGameRunning);
      setStopButtonLabel(isGameRunning ? "START" : "STOP");
    }
  };

  // Efekt uboczny do aktualizacji pozycji kretów w interwale czasowym
  useEffect(() => {
    const intervalId = setInterval(updateMolePositions, 750);

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameRunning]);

  // Efekt uboczny do odliczania czasu gry
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

  // Obliczanie minut i sekund pozostałego czasu
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

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
