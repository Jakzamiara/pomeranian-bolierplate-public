import { Icon } from "../../Components/Icon/Icon";
import { DownArrow } from "../../Components/HeaderMenu/downarrow";
import "./styles.css";

export const HeaderMenu = () => {
  return (
    <div className="right-side">
      <div className="icon">
        <Icon />
      </div>
      <div className="profile-pic">
        <div className="pic" />
      </div>
      <div className="nameandsurname">
        <p className="name">
          <strong>Jakub</strong>
        </p>
        <p className="surname">Zamiara</p>
      </div>
      <div className="arrow">
        <DownArrow />
      </div>
    </div>
  );
};
