import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function Footer({ darkMode, setDarkMode }) {
  return (
    <footer className="bg-gray-200 dark:bg-black text-center p-6 mt-8 rounded shadow-md">
      <p>&copy; 2024 Arteveldehogeschool. Alle rechten voorbehouden.</p>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </footer>
  );
}

export default Footer;
