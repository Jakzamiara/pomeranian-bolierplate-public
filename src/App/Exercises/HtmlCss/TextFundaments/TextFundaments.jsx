import "./styles.css";
export const TextFundaments = () => {
  return (
    <>
      <hr></hr>
      <div>
        <h2>Podstawowe</h2>
        <p className="color">Kolor tesktu</p>
        <p className="size">Wielkość tekstu</p>
        <p className="style">Trzeci</p>
        <p className="weight">Czwarty</p>
      </div>
      <hr></hr>
      <div>
        <h2>Dekoracje</h2>
        <p className="transform">Pierwszy</p>
        <p className="decoration">Drugi</p>
        <p className="shadow">Trzeci</p>
      </div>
      <hr></hr>
      <div>
        <h2>Odległości</h2>
        <p className="height">Pierwszy</p> //Wysokość lini
        <p className="spacing">Drugi</p>
        <p className="wordspacing">Trzeci Trzeci</p>
      </div>
      <hr></hr>
      <div>
        <h2>Umiejscowienie</h2>
        <p className="align">Pierwszy</p>
        <p className="super">Drugi</p>
        <p className="sub">Trzeci Trzeci</p>
      </div>
      <hr></hr>
      <div>
        <h2>Lista</h2>
        <ol className="list-ol">
          <li>Pierwszy</li>
          <li>Drugi</li>
          <li>Trzeci</li>
        </ol>
      </div>
    </>
  );
};
