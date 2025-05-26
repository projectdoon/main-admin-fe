import React from "react";
import { NavLink } from "react-router-dom";

function NavDropDown({ title, subLinks, Logo, isOpen, onToggle }) {
  return (
    <li className="w-full">
      <div
        onClick={onToggle}
        className="cursor-pointer text-sm font-normal flex gap-2 items-center"
      >
        <Logo className='h-6 w-5 text-black' />
        {title}
      </div>

      <div
        className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-1">
          {subLinks.map((item, idx) => (
            <li key={idx} className="py-0.5 pl-3">
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
