import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => (
  <div className="navbar">
    <div className="navbar__container d-flex justify-content-between">
      <div className="navbar__container__logo">
        URL Shortener
      </div>
      <div className="navbar__container__button">
        <Fragment>
          <Link to="/users/signin">Sign in</Link>
        </Fragment>
      </div>
    </div>
  </div>
)

export default Navbar