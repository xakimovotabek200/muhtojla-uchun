import React from "react";
import Navbar from "../components/Navbar/Nabar";
import Footer from "../components/Footer/Footer";

function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
