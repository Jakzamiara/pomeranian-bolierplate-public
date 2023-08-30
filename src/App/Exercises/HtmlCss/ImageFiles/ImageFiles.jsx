import "./styles.css";
import first from "./jpg.jpg";
import second from "./png.png";
import third from "./svg.svg";
import fourth from "./giphy.svg";

export const ImageFiles = () => {
  return (
    <>
      <div className="images">
        <img src={first} />
        <img src={second} />
        <img src={third} />
        <img src={fourth} />
      </div>
    </>
  );
};
