import React, { useState, useEffect } from "react";
import "./styles.css";

export const ReactOnClick = () => {
  const [count, setCount] = useState(10);
  const [isCounting, setIsCounting] = useState(false);
  const [buttonText, setButtonText] = useState("Zacznij liczyć");

  useEffect(() => {
    let interval;

    if (isCounting && count > 0) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    if (count === 0) {
      clearInterval(interval);
      setIsCounting(false);
      setButtonText("Odliczanie skończone");
    }

    return () => clearInterval(interval);
  }, [isCounting, count]);

  const handleButtonClick = () => {
    if (!isCounting) {
      setIsCounting(true);
      setButtonText("Odliczam...");
    }
  };

  return (
    <div>
      <h3>Cześć</h3>
      <button onClick={handleButtonClick} enable={isCounting && count > 0}>
        {isCounting ? `Odliczam: ${count}` : buttonText}
      </button>
    </div>
  );
};
