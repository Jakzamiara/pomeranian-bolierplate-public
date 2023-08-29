import { NavLink } from "react-router-dom";
import { HouseIcon } from "../Components/Icons/HouseIcon";
import { ElementIcon } from "../Components/Icons/ElementIcon";
import { EditIcon } from "../Components/Icons/EditIcon";
import { CalendarIcon } from "../Components/Icons/CalendarIcon";
import { SettingIcon } from "../Components/Icons/SettingIcon";
import { PersonalCardIcon } from "../Components/Icons/PersonalCardIcon";
import "./styles/aside.css";

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul className="hover">
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row">
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <SettingIcon />
            <NavLink to="cv">CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="Kalendarz">Calendar</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="Blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: "1rem 0" }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
