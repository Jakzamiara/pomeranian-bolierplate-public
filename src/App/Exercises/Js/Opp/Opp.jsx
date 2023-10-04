export const Opp = () => {
  class Computer {
    #faveWord = "I compute!";

    #add(x, y) {
      return x + y;
    }

    compute(num1, num2, multiplier) {
      const sum = this.#add(num1, num2);
      return sum * multiplier;
    }

    iCompute() {
      console.log(this.#faveWord);
    }
  }

  const myComputer = new Computer();

  const result = myComputer.compute(2, 39, 8);
  console.log(`Wynik: ${result}`);

  myComputer.iCompute();
};
//Stworzymy klasę komputera z poniższymi właściwościami:
//1) prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
//2) prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
//3) publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
//4) publiczną metodę introduce() - która wyprintuje ulubione słowo
//5) poużywaj metod mini komputera
