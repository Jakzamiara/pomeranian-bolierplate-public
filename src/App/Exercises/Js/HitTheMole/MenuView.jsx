import React, { useState } from "react";

export function MenuView({ startGame, handleStartClick, handleTimeSelection }) {
  const [timeButton, setTimeButton] = useState(null);
  const [moleButtonId, setMoleButtonId] = useState(null);
  const [selectedMoles, setSelectedMoles] = useState(null);

  const handleTimeClick = (time) => {
    handleTimeSelection(time);
    setTimeButton(time);
  };

  const handleMoleClick = (event) => {
    setMoleButtonId(event.target.id);
    setSelectedMoles(parseInt(event.target.id));
  };

  return (
    <div className="container">
      <div className="gridbox">
        <div className="box">
          <div className="text-row">CZAS GRY</div>
          <div className="button-row">
            <button
              id={1}
              onClick={() => handleTimeClick(1)}
              className={timeButton === 1 ? "smallButton" : "bigButton"}
              style={{
                backgroundColor: timeButton === 1 ? "#FE3756" : "",
              }}
            >
              1 minuta
            </button>
            <button
              id={2}
              onClick={() => handleTimeClick(2)}
              className={timeButton === 2 ? "smallButton" : "bigButton"}
              style={{
                backgroundColor: timeButton === 2 ? "#FE3756" : "",
              }}
            >
              2 minuty
            </button>
            <button
              id={3}
              onClick={() => handleTimeClick(3)}
              className={timeButton === 3 ? "smallButton" : "bigButton"}
              style={{
                backgroundColor: timeButton === 3 ? "#FE3756" : "",
              }}
            >
              3 minuty
            </button>
          </div>
        </div>

        <div className="row-mole">
          <div className="margin-mole">LICZBA KRETÓW</div>
          <div className="button-general">
            <button
              id="1"
              onClick={handleMoleClick}
              className={
                moleButtonId === "1" ? "small-button-selected" : "small-button"
              }
              style={{
                backgroundColor: moleButtonId === "1" ? "#FE3756" : "",
              }}
            >
              1 kret
            </button>
            <button
              id="2"
              onClick={handleMoleClick}
              className={
                moleButtonId === "2" ? "small-button-selected" : "small-button"
              }
              style={{
                backgroundColor: moleButtonId === "2" ? "#FE3756" : "",
              }}
            >
              2 krety
            </button>
            <button
              id="3"
              onClick={handleMoleClick}
              className={
                moleButtonId === "3" ? "small-button-selected" : "small-button"
              }
              style={{
                backgroundColor: moleButtonId === "3" ? "#FE3756" : "",
              }}
            >
              3 krety
            </button>
          </div>
        </div>

        <div className="control">
          <div className="control-text">PRZYCISKI STREUJĄCE</div>
          <div className="control-button">
            <button
              className="start-button"
              onClick={() => {
                if (selectedMoles) {
                  handleStartClick(timeButton, selectedMoles);
                }
              }}
              disabled={startGame || !selectedMoles}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
