import { NavLink } from "react-router-dom";
import { HouseIcon } from "../Components/Icons/HouseIcon";
import { ElementIcon } from "../Components/Icons/ElementIcon";
import "./styles/aside.css";

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row">
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: "1rem 0" }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
