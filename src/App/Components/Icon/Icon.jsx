import "./styles.css";

import icon from "./setting.png";

export const Icon = () => {
  return (
    <div className="right-side">
      <div className="Icon">
        <img className="icon" src={icon} />
      </div>
    </div>
  );
};
