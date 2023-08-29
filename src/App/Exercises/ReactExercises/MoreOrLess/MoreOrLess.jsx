import { useState } from "react";

export const MoreOrLess = () => {
  const [luckyNumber, setLuckyNumber] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const HIDDEN_NUMBER = 8;

  function handleChange(event) {
    setHasErrors(false);
    setLuckyNumber(event.target.value);

    if (isNaN(+event.target.value)) {
      setHasErrors(true);
    }
  }
  const isBigger = +luckyNumber > HIDDEN_NUMBER;

  return (
    <div>
      <p>Podaj liczbę i sprawdż czy jest większa od naszej</p>
      <input
        type="text"
        placeholder="Wpisz numer"
        value={luckyNumber}
        onChange={handleChange}
      />
      {luckyNumber && hasErrors === false && (
        <p>Odpowiedż: {isBigger ? "TAK" : "NIE"}</p>
      )}
      {hasErrors && <strong>Wpisana wartość nie jest liczbą</strong>}
    </div>
  );
};
