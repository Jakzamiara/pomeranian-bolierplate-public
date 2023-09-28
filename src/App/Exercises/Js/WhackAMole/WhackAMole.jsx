import React, { useState } from "react";
import { WhackMenu } from "./WhackMenu";
import { WhackGame } from "./WhackGame";
import "./styles.css";

export const WhackAMole = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedMole, setSelectedMole] = useState(1);
  const handleStart = () => {
    setGameStarted(true);
  };

  const handleMoleSelection = (mole) => {
    setSelectedMole(mole);
  };

  return (
    <div className="whack-a-mole-front-page">
      <h3>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>
      {gameStarted ? (
        <WhackGame selectedTime={selectedTime} selectedMole={selectedMole} />
      ) : (
        <WhackMenu
          onStart={handleStart}
          onTimeSelect={setSelectedTime}
          onMoleSelect={handleMoleSelection}
        />
      )}
    </div>
  );
};
