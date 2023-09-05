import "./styles.css";
import first from "../ImageFiles/jpg.jpg";

export const Float = () => {
  return (
    <div className="container">
      <div>
        <img src={first} alt="jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          minus, quisquam ex porro earum commodi facilis nobis laboriosam
          sapiente! Mollitia error consectetur eum! Recusandae dignissimos in
          excepturi, quam quibusdam laudantium nulla officia minima facilis ipsa
          aliquam ea. Obcaecati voluptates hic quas ut enim! Nisi, ipsa ipsam?
          Tempore temporibus odit aut.
        </p>
      </div>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </div>
  );
};
