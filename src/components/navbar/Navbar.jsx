import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="py-3">
        <div className=" max-w-[1440px] px-3 mx-auto">
          <div className=" flex items-center justify-between">
            <ul>
              <li>
                <Link to="/">logo</Link>
              </li>
            </ul>
            <ul className=" flex items-center gap-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-red-700 ${isActive && "text-green-400"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `text-red-700 ${isActive && "text-green-400"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="github"
                  className={({ isActive }) =>
                    `text-red-700 ${isActive && "text-green-400"}`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <button className=" bg-orange-500 px-3 py-1 border-2 border-orange-500 hover:bg-transparent text-white hover:text-orange-500">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
