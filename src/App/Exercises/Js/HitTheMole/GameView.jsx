import React, { useState, useEffect } from "react";
import { MoleIcon } from "./moleicon";

export const GameView = ({ selectedTime, handleReturnToMenu }) => {
  const [molePositions, setMolePositions] = useState(Array(10).fill(false));
  const [clickCount, setClickCount] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const [stopButtonLabel, setStopButtonLabel] = useState("STOP");
  const [cellClicked, setCellClicked] = useState(Array(10).fill(false));

  const generateRandomPosition = () => {
    return Math.floor(Math.random() * 10);
  };

  const updateMolePositions = () => {
    if (isGameRunning) {
      const newMolePositions = Array(10).fill(false);
      newMolePositions[generateRandomPosition()] = true;
      setMolePositions(newMolePositions);
    }
  };

  const handleMoleClick = (index) => {
    if (isGameRunning) {
      if (molePositions[index]) {
        setClickCount(clickCount + 1);
        setCellClicked((prev) => {
          const updatedCells = [...prev];
          updatedCells[index] = true;
          return updatedCells;
        });
        setTimeout(() => {
          setCellClicked((prev) => {
            const updatedCells = [...prev];
            updatedCells[index] = false;
            return updatedCells;
          });
        }, 100);
      } else {
        setCellClicked((prev) => {
          const updatedCells = [...prev];
          updatedCells[index] = true;
          return updatedCells;
        });
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

  const toggleGame = () => {
    if (isGameRunning) {
      handleReturnToMenu();
    } else {
      setIsGameRunning(!isGameRunning);
      setStopButtonLabel(isGameRunning ? "START" : "STOP");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateMolePositions, 800);

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameRunning]);

  return (
    <div className="game-view">
      <div className="grid-options">
        <div className="time-to-end">
          <p>CZAS DO KOŃCA</p>
          <div className="time-time">00</div>
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
