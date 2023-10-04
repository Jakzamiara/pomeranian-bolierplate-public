export const Encapsulation = () => {
  class Engine {
    start() {
      return "engine is turned on";
    }

    stop() {
      return "engine is turned off";
    }
  }

  class Klaxon {
    beep() {
      return "BEEEP!";
    }
  }

  class SteeringWheel {
    turn(direction) {
      return `Skręcamy w ${direction}`;
    }
  }

  class GPS {
    navigate() {
      const directions = ["turn right", "turn left", "drive straight"];
      const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
      return randomDirection;
    }
  }

  class Car {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringWheel = new SteeringWheel();
      this.gps = new GPS();
    }

    start() {
      return this.engine.start();
    }

    stop() {
      return this.engine.stop();
    }

    beep() {
      return this.klaxon.beep();
    }

    turn(direction) {
      return this.steeringWheel.turn(direction);
    }

    navigate() {
      return this.gps.navigate();
    }
  }

  const myCar = new Car();
  console.log(myCar.start());
  console.log(myCar.stop());
  console.log(myCar.beep());
  console.log(myCar.turn("left"));
  console.log(myCar.navigate());

  // class Person {
  //   introduce() {
  //     console.log("I am a Person");
  //   }
  // }

  // class Builder extends Person {
  //   introduce() {
  //     super.introduce();
  //     console.log("I am also a Builder");
  //   }
  // }

  // class Doctor extends Person {
  //   introduce() {
  //     super.introduce();
  //     console.log("I am also a Doctor");
  //   }
  // }

  // class Pediatrician extends Doctor {
  //   introduce() {
  //     console.log("I'm a Pediatrician");
  //   }
  // }

  // const person = new Person();
  // person.introduce();

  // const builder = new Builder();
  // builder.introduce();

  // const doctor = new Doctor();
  // doctor.introduce();

  // const pediatrician = new Pediatrician();
  // pediatrician.introduce();
};
