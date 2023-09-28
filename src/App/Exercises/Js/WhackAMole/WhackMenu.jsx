import React, { useState } from "react";
import "./styles.css";

export const WhackMenu = ({ onStart, onTimeSelect, onMoleSelect }) => {
  const [selectedTime, setSelectedTime] = useState("time-1");
  const [selectedMole, setSelectedMole] = useState("mole-1");

  const handleTimeClick = (id) => {
    const time = id === "time-1" ? 1 : id === "time-2" ? 2 : 3;
    onTimeSelect(time);
    setSelectedTime(id);
  };
  const handleMoleSelection = (id) => {
    const mole = id === "mole-1" ? 1 : id === "mole-2" ? 2 : 3;
    onMoleSelect(mole);
    setSelectedMole(id);
  };

  return (
    <div className="grid-whack">
      <div className="whack-time">
        <p>CZAS GRY</p>
        <div className="whack-time-buttons">
          <button
            id="time-1"
            className={`whack-button ${
              selectedTime === "time-1" ? "selectedd" : ""
            }`}
            onClick={() => handleTimeClick("time-1")}
          >
            1 Minuta
          </button>
          <button
            id="time-2"
            className={`whack-button ${
              selectedTime === "time-2" ? "selectedd" : ""
            }`}
            onClick={() => handleTimeClick("time-2")}
          >
            2 Minuty
          </button>
          <button
            id="time-3"
            className={`whack-button ${
              selectedTime === "time-3" ? "selectedd" : ""
            }`}
            onClick={() => handleTimeClick("time-3")}
          >
            3 Minuty
          </button>
        </div>
      </div>
      <div className="whack-mole-select">
        <p>LICZBA KRETÓW</p>
        <div className="whack-mole-select-buttons">
          <button
            id="mole-1"
            className={`whack-button ${
              selectedMole === "mole-1" ? "selectedd" : ""
            }`}
            onClick={() => handleMoleSelection("mole-1")}
          >
            1 Kret
          </button>
          <button
            id="mole-2"
            className={`whack-button ${
              selectedMole === "mole-2" ? "selectedd" : ""
            }`}
            onClick={() => handleMoleSelection("mole-2")}
          >
            2 Krety
          </button>
          <button
            id="mole-3"
            className={`whack-button ${
              selectedMole === "mole-3" ? "selectedd" : ""
            }`}
            onClick={() => handleMoleSelection("mole-3")}
          >
            3 Krety
          </button>
        </div>
      </div>
      <div className="whack-start">
        <p>PRZYCISKI STERUJĄCE</p>
        <div className="whack-start-buttons">
          <button id="start-button" onClick={onStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};
