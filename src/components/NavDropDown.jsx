import React from "react";
import { NavLink } from "react-router-dom";

function NavDropDown({ title, subLinks, isOpen, onToggle }) {
  return (
    <li className="w-full">
      <div
        onClick={onToggle}
        className="cursor-pointer text-sm font-normal"
      >
        {title}
      </div>

      <div
        className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-2">
          {subLinks.map((item, idx) => (
            <li key={idx} className="border-l-2 border-gray-400 py-0.5 pl-2">
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive ? "text-sm font-bold" : "text-sm font-normal"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default NavDropDown;
