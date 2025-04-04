import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">

      <div className="flex items-center gap-2">
      <a href="https://vite.dev/">
            <img src="https://vite.dev/logo.svg" alt="Vite Logo" />
            <span>Vite</span>
          </a>
      </div>


      <ul className="hidden md:flex gap-6">
        <li className="hover:text-gray-400 cursor-pointer">Guide</li>
        <li className="hover:text-gray-400 cursor-pointer">Config</li>
        <li className="hover:text-gray-400 cursor-pointer">Plugins</li>
        <li className="hover:text-gray-400 cursor-pointer">Resources ▼</li>
        <li className="hover:text-gray-400 cursor-pointer">Version ▼</li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="bg-gray-800 px-3 py-1 rounded-lg text-gray-300 hover:bg-gray-700">
          Search <span className="text-xs">(Ctrl+K)</span>
        </button>
        <span className="text-xl cursor-pointer">⋮</span>
      </div>
    </nav>
  );
};

export default Navbar;

