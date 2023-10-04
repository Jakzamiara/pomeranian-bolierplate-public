import React, { useState, useEffect } from "react";
import "./styles.css";

export const LocalStorage = () => {
  const [nick, setNick] = useState("");
  const [nickList, setNickList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedNickList = localStorage.getItem("nickList");
    if (savedNickList) {
      setNickList(JSON.parse(savedNickList));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("nickList", JSON.stringify(nickList));
    }
  }, [nickList, isLoaded]);

  const addNick = () => {
    if (!nickList.includes(nick) && nick !== "") {
      setNickList([...nickList, nick]);
      setNick("");
    }
  };

  const removeNick = (removeIndex) => {
    const newNickList = nickList.filter((_, index) => index !== removeIndex);
    setNickList(newNickList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNick();
    }
  };

  return (
    <div className="LocalStorage">
      <div className="elementone">
        <span>NICK</span>
        <input
          type="text"
          placeholder="Twój Nick"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addNick}>DODAJ</button>
      </div>
      <div className="elementtwo">
        <ul>
          {nickList.map((n, index) => (
            <li key={index}>
              {n}
              <button onClick={() => removeNick(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
