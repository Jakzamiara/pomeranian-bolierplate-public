import "./styles.css";
import logo from "./logo.png";
import pic from "./pic.png";
import { RoundImage } from "../../../Components/RoundImage/RoundImage";

export const ImageFiles = () => {
  return (
    <div className="pics">
      <img src={logo} alt="logo" />
      <img src={pic} alt="zdjecię" />
      <RoundImage src={pic} size={400} />
      <RoundImage src={logo} size={400} />
    </div>
  );
};
