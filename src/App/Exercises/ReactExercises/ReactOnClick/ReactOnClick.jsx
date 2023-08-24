import { useState } from "react";
import "./styles.css";

export const ReactOnClick = () => {
  const [isClicked, setIsClicked] = useState(false);

  const text = isClicked ? "Kliknięte" : "Nie Kliknięte";

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <h3>Cześć</h3>

      <button onClick={handleClick}>{text}</button>
    </div>
  );
};
