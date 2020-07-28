import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Navbar = () => (
  <Fragment>
    <div className="navbar">
      <div className="navbar__container d-flex justify-content-between">
        <Link to="/">
          <div className="navbar__container__logo">URL Shortener</div>
        </Link>
        <div className="navbar__container__button">
          <Fragment>
            <Link to="/users/signin">Sign in</Link>
          </Fragment>
        </div>
      </div>
    </div>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
    />
  </Fragment>
)

export default Navbar