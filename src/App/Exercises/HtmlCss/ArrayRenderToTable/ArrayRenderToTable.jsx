import "./style.css";
const bands = [
  {
    band: "The Clash",
    yearFormed: 1976,
    albums: 6,
    mostFamousSong: "London Calling",
  },
  {
    band: "Sex Pistols",
    yearFormed: 1975,
    albums: 1,
    mostFamousSong: "Anarchy in the UK",
  },
  {
    band: "Ramones",
    yearFormed: 1974,
    albums: 14,
    mostFamousSong: "Blitzkrieg Bop",
  },
  {
    band: "The Cure",
    yearFormed: 1976,
    albums: 13,
    mostFamousSong: "Just Like Heaven",
  },
  {
    band: "Joy Division",
    yearFormed: 1976,
    albums: 2,
    mostFamousSong: "Love Will Tear Us Apart",
  },
  {
    band: "Siouxsie and the Banshees",
    yearFormed: 1976,
    albums: 11,
    mostFamousSong: "Hong Kong Garden",
  },
];
export const ArrayRenderToTable = () => {
  return (
    <table>
      <tr>
        <th>Zespół</th>
        <th>Rok Powstania</th>
        <th>Ilość albumów</th>
        <th>Najpopularniejsza piosenka</th>
      </tr>
      {bands.map((item) => (
        <tr key={item.band}>
          <td>{item.band}</td>
          <td>{item.yearFormed}</td>
          <td>{item.albums}</td>
          <td>{item.mostFamousSong}</td>
        </tr>
      ))}
    </table>
  );
};
