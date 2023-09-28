import React, { useState, useEffect } from "react";
import { MoleIcon } from "./moleicon";
import "./styles.css";

export const WhackGame = ({ selectedTime }) => {
  const [molePosition, setMolePosition] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedCell, setClickedCell] = useState(null);
  const [cellColor, setCellColor] = useState("");
  const [remainingTime, setRemainingTime] = useState(selectedTime * 60);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleMoleClick = () => {
    setScore((prevScore) => prevScore + 1);
    setCellColor("green");
    setTimeout(() => {
      setCellColor("");
    }, 100);
  };

  const handleCellClick = (index) => {
    if (index !== molePosition) {
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
    const timer = setInterval(() => {
      const newPosition = Math.floor(Math.random() * 10);
      setMolePosition(newPosition);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            {index === molePosition && (
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
