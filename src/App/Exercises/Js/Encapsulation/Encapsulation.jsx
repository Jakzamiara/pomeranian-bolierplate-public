export const Encapsulation = () => {
  class Human {
    firstName;
    lastName;
    #secretNumber = 42;
    #hash = 90;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    #giveMeSecretNumber() {
      return this.#secretNumber;
    }

    getHashedSecretNumber() {
      const sn = this.#giveMeSecretNumber();
      return sn * this.#hash;
    }

    CheckIfGivenNumberIsSn(num) {
      return this.getHashedSecretNumber() / num === this.#hash;
    }
  }

  const radek = new Human("Radek", "Wojtysiak");

  console.log(radek.getHashedSecretNumber());
  console.log(radek.CheckIfGivenNumberIsSn(42));

  return <>Hermetyzacja</>;
};
