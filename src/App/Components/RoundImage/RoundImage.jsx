import "./style.css";

export const RoundImage = ({ src, size, grey }) => {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        width: `${size}px`,
        height: `${size}px`,
        filter: `grayscale(${grey})`,
      }}
    ></div>
  );
};
