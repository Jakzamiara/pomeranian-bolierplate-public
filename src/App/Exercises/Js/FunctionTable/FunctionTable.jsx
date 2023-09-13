import "./styles.css";

export const FunctionTable = () => {
  // napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu tablicach
  // sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 5, 7, 9];
  const result = sameNumbers(array1, array2);
  console.log("sameNumbers", result);
  function create2dArray(x, y) {
    const array2d = [];

    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(0);
      }
      array2d.push(row);
    }
  }

  // Przykłady użycia:
  const result1 = create2dArray(1, 1);
  console.log(result1); // Powinno wypisać: [[0]]

  const result2 = create2dArray(1, 2);
  console.log(result2); // Powinno wypisać: [[0, 0]]a
};
// Zadanie 1: Filtruj parzyste liczby
// zastosuj filter
// Zadanie 2: Podwój każdy element tablicy
function doubleElements(array) {
  const newArray = [];
  array.map((x) => newArray.push(x, x));
  return newArray;
}
console.log("doubleElements", doubleElements([1, 2, 3]));
// zastosuj map
// Zadanie 3: Znajdź najdłuższy wyraz
// zastosuj reduce (w reduce stwórz if'a na sprawdzenie czy obecny wyraz jest "dłuższy"  od porównywanego)
// Zadanie 4:  Oblicz sumę liczb parzystych
// zastosuj reduce
