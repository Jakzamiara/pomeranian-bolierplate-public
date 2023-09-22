import React, { useState, useEffect } from "react";
import { MoleIcon } from "./moleicon";
import { CongratulationView } from "./Congratulation";
import { MenuView } from "./MenuView";

export const GameView = ({
  selectedTime,
  handleReturnToMenu,
  selectedMoles,
}) => {
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

  const [molePositions, setMolePositions] = useState(
    Array(10)
      .fill(false)
      .map(() => generateRandomPosition(selectedMoles))
  );

  const [clickCount, setClickCount] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const [stopButtonLabel, setStopButtonLabel] = useState("STOP");
  const [cellClicked, setCellClicked] = useState(Array(10).fill(false));
  const [remainingTime, setRemainingTime] = useState(selectedTime * 60);
  const [showCongratulation, setShowCongratulation] = useState(false);

  const updateMolePositions = () => {
    if (isGameRunning) {
      setMolePositions(generateRandomPosition(selectedMoles));
    }
  };
  const startGame = () => {
    setIsGameRunning(true);
    setShowCongratulation(false);
    setRemainingTime(selectedTime * 60);
  };
  const endGame = () => {
    setIsGameRunning(false);
    setShowCongratulation(true);
  };
  const handleStartClick = () => {
    if (!isGameRunning) {
      startGame();
    } else {
      endGame();
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
        if (clickCount > 0) {
          setClickCount(clickCount - 1);
        }
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
    }
  };

  useEffect(() => {
    if (isGameRunning) {
      const intervalId = setInterval(updateMolePositions, 800);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isGameRunning, selectedMoles]);

  useEffect(() => {
    if (isGameRunning) {
      const timerInterval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        } else {
          clearInterval(timerInterval);
          endGame(); // Wywołaj funkcję zakończenia gry po upływie czasu.
        }
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [remainingTime, isGameRunning]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="game-view">
      {showCongratulation ? (
        <CongratulationView
          score={clickCount}
          time={selectedTime}
          moles={selectedMoles}
          handleRestartGame={() => setShowCongratulation(false)}
        />
      ) : (
        <>
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
                onClick={handleStartClick}
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
        </>
      )}
    </div>
  );
};
