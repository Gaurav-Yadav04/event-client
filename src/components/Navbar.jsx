import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">

        {/* 🔷 Logo */}
        <h1 className="text-xl font-bold cursor-pointer">
          📚 NotesHub
        </h1>

        {/* 🖥️ Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <button className="hover:text-gray-200">Home</button>
          <button className="hover:text-gray-200">Notes</button>
          <button className="hover:text-gray-200">About</button>

          {/* 🔍 Search */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded text-black"
          />
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          <button className="text-left">Home</button>
          <button className="text-left">Notes</button>
          <button className="text-left">About</button>

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded text-black"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;