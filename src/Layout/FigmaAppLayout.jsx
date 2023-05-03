import React from "react";
import Figmanavbar from "../Figma/Navbar/FigmaNavbar";

function FigmaAppLayout({ children }) {
  return (
    <div>
      <Figmanavbar />
      {children}
    </div>
  );
}

export default FigmaAppLayout;
