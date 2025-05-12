import React from "react";
import { NavLink } from "react-router-dom";

function NavComponent({ url, styling, activeStyling, children, ...props }) {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => {
          console.log(`Link to ${url} isActive:`, isActive);
          return isActive ? `${styling} ${activeStyling}` : styling;
        }}
        {...props}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal", 
        })}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavComponent;
