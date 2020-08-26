import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "Home", path: "" },
    { name: "Pagina #1", path: "pag1" },
    { name: "Pagina #2", path: "pag2" },
    { name: "Pagina #3", path: "pag3" },
  ];
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.name}>
          <NavLink activeStyle={{ color: "tomato" }} exact to={`/${item.path}`}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
