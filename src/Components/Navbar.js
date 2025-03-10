import React from "react";

function Navbar() {
  return (
    <div className="bg-purple-100 flex items-center justify-between px-4 py-2 shadow-md">
      <h1 className="text-xl font-bold text-purple-800">Power Sync</h1>
      <div className="rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center">
        <span className="text-gray-700 font-bold">👤</span>
      </div>
    </div>
  );
}

export default Navbar;
