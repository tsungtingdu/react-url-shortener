import React, { useMemo } from "react";
import Navbar from './components/Navbar'

const Layout = (props) => {

  const isLogin = useMemo(() => {
    return global.auth.getData() ? true : false
  }, [])

  return (
    <div className="main">
      <Navbar isLogin={isLogin} />
      {props.children}
    </div>
  );
};

export default Layout;