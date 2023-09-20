import React, { useState, useEffect } from "react";
import "./styles.css";
import cookie from "../../Images/cookie.svg";

export const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const userAcceptedCookies = localStorage.getItem("acceptedCookies");
    if (userAcceptedCookies) {
      setShowBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    setShowBanner(false);
    localStorage.setItem("acceptedCookies", "true");
  };

  return (
    <>
      {showBanner && (
        <div className="cookies">
          <div className="cookiesContent">
            <img src={cookie} alt="cookies" />
            <div>
              <h3>Pozwól na pliki cookies</h3>
              <p>
                Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
                działanie strony i pomagają nam świadczyć usługi na najwyższym
                poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
                tych plików i przejść do strony lub dostosować użycie do swoich
                referencji. W tym celu kliknij przycisk po prawej stronie
                “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
                indywidualnym preferencjom.
              </p>
            </div>
          </div>
          <div>
            <button
              className="cookiesButton buttonPrimary"
              onClick={handleAcceptCookies}
            >
              W porządku
            </button>
            <button className="cookiesButton buttonSecondary">
              Dopasuj zgody
            </button>
          </div>
        </div>
      )}
    </>
  );
};