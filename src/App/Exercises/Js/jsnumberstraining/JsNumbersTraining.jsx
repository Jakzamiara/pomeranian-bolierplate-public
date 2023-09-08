import "./styles.css";

export const JsNumbersTraining = () => {
  const age = 18;
  const hasDriverLicense = true;
  const hasCar = true;

  const canDrive = (age, hasDriverLicense, hasCar) => {
    if (age >= 18) {
      return "You are too young to drive.";
    }
    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }
    return hasCar ? "You can drive your car!" : "You can drive a rental car.";
  };

  const hasEnough = (value) => Boolean(value);

  const isStringShort = (inputString) => inputString.length < 10;

  function convertGrade(grade) {
    if (grade >= 1 && grade <= 6) {
      switch (grade) {
        case 1:
          return "Jedynka";
        case 2:
          return "Dwójka";
        case 3:
          return "Trójka";
        case 4:
          return "Czwórka";
        case 5:
          return "Piątka";
        case 6:
          return "Szóstka";
        default:
          return "Brak danych";
      }
    } else {
      return "Brak danych";
    }
  }

  console.log(canDrive(age, hasDriverLicense, hasCar));
  console.log(hasEnough(true));

  const sampleString = "Jestem tekstem";
  const stringIsShort = isStringShort(sampleString);
  console.log(stringIsShort);

  const grade = 3;
  console.log(`Ocena: ${grade} - ${convertGrade(grade)}`);

  return <div>{Math.random()}</div>;
};
