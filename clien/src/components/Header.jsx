import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to={ROUTES.home.path}>
        <img
          src="https://placehold.co/150x50?text=Logo"
          alt="Artevelde logo"
          className="h-12"
        />
      </Link>
      <nav>
        <ul className="flex items-center justify-center gap-5">
          {Object.values(ROUTES).map((route) => (
            <li
              key={route.path}
              className=" text-orange-300 hover:font-semibold"
            >
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
