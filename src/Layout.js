import React, { useMemo } from "react";
import Navbar from './components/Navbar'

const Layout = (props) => {

  return (
    <div className="main">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;