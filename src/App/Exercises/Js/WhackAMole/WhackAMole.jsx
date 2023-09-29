import React, { useState } from "react";
import { WhackMenu } from "./WhackMenu";
import { WhackGame } from "./WhackGame";
import { WhackCong } from "./WhackCong";
import "./styles.css";

export const WhackAMole = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedMole, setSelectedMole] = useState(1);

  const handleStart = () => {
    setGameStarted(true);
    setGameEnded(false);
  };

  const handleMoleSelection = (mole) => {
    setSelectedMole(mole);
  };

  const handleEnd = () => {
    setGameEnded(true);
  };

  return (
    <div className="whack-a-mole-front-page">
      {gameStarted ? (
        gameEnded ? (
          <WhackCong score={score} selectedTime={selectedTime} />
        ) : (
          <WhackGame
            selectedTime={selectedTime}
            selectedMole={selectedMole}
            setGameEnded={setGameEnded}
            handleEnd={handleEnd}
          />
        )
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
