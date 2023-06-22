import React from "react";
import Navbar from "./Sidebar";
import RouteGuard from "./RouteGuard";

const Layout = ({ children }) => {
  return (
    <>
      <RouteGuard>
      <Navbar />
      {children}
      </RouteGuard>
    </>
  );
};

export default Layout;
