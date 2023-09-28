import React, { useState, useEffect } from "react";
import { MoleIcon } from "./moleicon";
import "./styles.css";

export const WhackGame = ({ selectedTime, selectedMole }) => {
  const [score, setScore] = useState(0);
  const [clickedCell, setClickedCell] = useState(null);
  const [cellColor, setCellColor] = useState("");
  const [remainingTime, setRemainingTime] = useState(selectedTime * 60);
  const [molePositions, setMolePositions] = useState(
    Array(selectedMole).fill(0)
  );

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    if (remainingTime <= 0) return;
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleMoleClick = () => {
    setScore((prevScore) => prevScore + 1);
    setCellColor("green");
    setTimeout(() => {
      setCellColor("");
    }, 100);
  };

  const handleCellClick = (index) => {
    if (remainingTime <= 0) return;

    if (!molePositions.includes(index)) {
      setCellColor("red");
      setScore((prevScore) => Math.max(prevScore - 1, 0));
      setTimeout(() => {
        setCellColor("");
      }, 100);
    } else {
      handleMoleClick();
    }
  };

  useEffect(() => {
    let timer;
    if (remainingTime > 0) {
      timer = setInterval(() => {
        const availablePositions = [...Array(10).keys()];
        const newPositions = [];

        for (let i = 0; i < selectedMole; i++) {
          const randomIndex = Math.floor(
            Math.random() * availablePositions.length
          );
          newPositions.push(availablePositions[randomIndex]);
          availablePositions.splice(randomIndex, 1);
        }

        setMolePositions(newPositions);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [remainingTime, selectedMole]);

  return (
    <div className="whack-game">
      <div className="whack-game-menu">
        <div className="whack-time-to-end">
          <p className="time-p">CZAS DO KOŃCA</p>
          <button className="time-update-button">
            {formatTime(remainingTime)}
          </button>
        </div>
        <div className="whack-result">
          <p className="time-p">WYNIK</p>
          <div className="result-update-button">{score}</div>
        </div>
        <div className="whack-control">
          <p className="time-p">PRZYCISKI STERUJĄCE</p>
          <button className="control-update-button">STOP</button>
        </div>
      </div>
      <div className="whack-game-map">
        {[...Array(10).keys()].map((_, index) => (
          <div
            className={`whack-grid-map ${
              index === clickedCell ? cellColor : ""
            }`}
            key={index}
            onClick={() => {
              setClickedCell(index);
              handleCellClick(index);
            }}
          >
            {molePositions.includes(index) && (
              <div>
                <MoleIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
