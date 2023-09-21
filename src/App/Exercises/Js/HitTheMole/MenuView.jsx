import React, { useState } from "react";

export function MenuView({
  startGame,
  handleStartClick,
  handleTimeSelection,
  handleMoleSelection,
}) {
  // Stan przycisku wyboru czasu
  const [timeButton, setTimeButton] = useState(null);

  // Obsługa kliknięcia przycisku czasu
  const handleTimeClick = (time) => {
    // Ustaw wybrany czas i przekaż go do funkcji handleStartClick
    handleTimeSelection(time);
    setTimeButton(time);
  };

  // Stan przycisku wyboru liczby kretych
  const [moleButton, setMoleButton] = useState(null);

  // Obsługa kliknięcia przycisku wyboru liczby kretych
  const handleMoleClick = (event) => {
    console.log(event.target.id);
    setMoleButton(event.target.id);
    // Przekazanie wybranej liczby kretych do funkcji handleMoleSelection
    handleMoleSelection(event.target.id);
  };

  return (
    <div className="container">
      <div className="gridbox">
        <p className="header">
          Gra polegająca na podążaniu za krecikiem i trafianiu na kwadrat, w
          którym się pojawił.
        </p>
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
              id={4}
              onClick={handleMoleClick}
              className={
                moleButton === "1" ? "small-button-selected" : "small-button"
              }
              style={{
                backgroundColor: moleButton === "4" ? "#FE3756" : "",
              }}
            >
              1 kret
            </button>
            <button
              id={5}
              onClick={handleMoleClick}
              className={
                moleButton === "2" ? "small-button-selected" : "small-button"
              }
              style={{
                backgroundColor: moleButton === "5" ? "#FE3756" : "",
              }}
            >
              2 krety
            </button>
            <button
              id={6}
              onClick={handleMoleClick}
              className={
                moleButton === "3" ? "small-button-selected" : "small-button"
              }
              style={{
                backgroundColor: moleButton === "6" ? "#FE3756" : "",
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
              onClick={() => handleStartClick(timeButton)}
              disabled={startGame}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
