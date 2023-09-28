import "./styles.css";
import { WhackMenu } from "./WhackMenu";
export const WhackCong = () => {
  return (
    <div className="WhackCongratulation">
      <h3>Gratulację! Twój wynik to 32 złapane krety w czasie 2 minut!</h3>
      <WhackMenu />
    </div>
  );
};
