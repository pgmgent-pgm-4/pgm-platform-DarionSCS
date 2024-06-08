import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800">
      <Link to={ROUTES.home.path}>
        <img
          src="https://ahscdn.be/themes/custom/calibr8_easytheme/logo.svg?token=1716901855"
          alt="Artevelde logo"
          className="h-12"
        />
      </Link>
      <nav className="hidden md:flex items-center justify-center gap-5">
        <ul className="flex items-center justify-center gap-5">
          {Object.values(ROUTES).map((route) => (
            <li
              key={route.path}
              className="text-orange-300 hover:font-semibold"
            >
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="md:hidden text-orange-300 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <div className={` ${isMobileMenuOpen ? "open" : ""}`}>
          <span className="block w-8 h-0.5 bg-current "></span>
          <span className="block w-8 h-0.5 bg-current mt-1.5 "></span>
          <span className="block w-8 h-0.5 bg-current mt-1.5 "></span>
        </div>
      </button>
      {isMobileMenuOpen && (
        <nav className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center z-10">
          <ul className="flex flex-col items-center justify-center gap-5">
            {Object.values(ROUTES).map((route) => (
              <li
                key={route.path}
                className="text-orange-300 hover:font-semibold text-2xl"
                onClick={toggleMobileMenu}
              >
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
