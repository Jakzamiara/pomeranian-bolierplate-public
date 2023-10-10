import React, { useState } from "react";
import "./styles.css";

async function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Jan Kowalski" });
    }, 300);
  });
}

async function loadUserDetails(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ id: userId, age: 43, country: "Polska" });
      } else {
        reject(
          new Error(`Błąd serwera: nieudane wyszukanie dla user Id: ${userId}`)
        );
      }
    }, 300);
  });
}

async function loadAllUserData() {
  try {
    const user = await loadUser();
    const userDetails = await loadUserDetails(user.id);
    return { ...user, ...userDetails };
  } catch (err) {
    throw err;
  }
}

export const Promises = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
    setUserData(null);
    setError(null);
    setUserData("Wczytywanie...");

    try {
      const data = await loadAllUserData();
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <div className="userdetails">
      <button onClick={handleButtonClick}>Załaduj detale użytkownika</button>
      <div className="promises">
        {userData === "Wczytywanie..." && <p>{userData}</p>}
        {userData && userData !== "Wczytywanie..." && (
          <>
            <p>ID: {userData.id}</p>
            <p>Imię: {userData.name}</p>
            <p>Wiek: {userData.age}</p>
            <p>Kraj pochodzenia: {userData.country}</p>
          </>
        )}
      </div>
      {error && <div className="error">Błąd: {error}</div>}
    </div>
  );
};
