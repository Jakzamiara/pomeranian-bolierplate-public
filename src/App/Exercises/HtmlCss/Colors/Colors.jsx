import "./styles.css";
export const Colors = () => {
  return (
    <>
      <div>
        <h2 className="colorName">Jestem pomalowany przy użyciu "colorName"</h2>
        <h2 className="shortenHex">
          Jestem pomalowany przy użyciu "shortenHex"
        </h2>
        <h2 className="hex">Jestem pomalowany przy użyciu "hex"</h2>
        <h2 className="rgb">Jestem pomalowany przy użyciu "rgb"</h2>
        <h2 className="rgba">Jestem pomalowany przy użyciu "rgba"</h2>
      </div>
      <hr />
      <div className="opacity">Jestem divem z teksem</div>
      <div className="rgbaopacity">Jestem divem z teksem</div>
    </>
  );
};
