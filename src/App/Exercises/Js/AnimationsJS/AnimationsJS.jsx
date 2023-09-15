import { useEffect, useState } from "react";
import "./styles.css";

export const AnimationsJS = () => {
  const [text, setText] = useState("I love JavaScript. :)");
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleButton = () => {
    setIsAnimated((prev) => !prev);
  };

  return (
    <div>
      <div className="animated-box">
        <div className={`scrolling-text ${isAnimated ? "animate-text" : ""}`}>
          {text}
        </div>
      </div>
      <button onClick={toggleButton}>
        {isAnimated ? "Zakończ Animacje" : "Zacznij Animacje"}
      </button>
    </div>
  );
};
