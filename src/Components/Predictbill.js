import React from "react";
import Navbar from "./Navbar"; // Import Navbar
import Sidebar from "./Sidebar"; // Import Sidebar

function Predictbill() {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      <div className="flex">
        <Sidebar /> {/* Sidebar on the left */}
        <div className="flex-1 p-4">
          
        </div>
      </div>
    </div>
  );
}

export default Predictbill;
