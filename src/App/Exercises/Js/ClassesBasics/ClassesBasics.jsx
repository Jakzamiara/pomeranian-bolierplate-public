export const ClassesBasics = () => {
  class Animal {
    age;
    type;
    static hasHead = true;
    name;

    constructor(age, type, name) {
      this.age = age;
      this.type = type;
      this.name = name;
    }
    move() {
      console.log("tup tup tup");
    }
    static sayHello() {
      console.log("Hello");
    }
  }

  const animal = new Animal(12, "cat", "Mruczek");
  animal.move();
  Animal.sayHello();

  console.log(animal instanceof Animal);

  return <>classes</>;
};
