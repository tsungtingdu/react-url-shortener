import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Navbar = (props) => {
  const signOut = e => {
    global.auth.removeToken()
  }

  return (<Fragment>
    <div className="navbar">
      <div className="navbar__container d-flex justify-content-between">
        <Link to="/">
          <div className="navbar__container__logo">URL Shortener</div>
        </Link>
        <Fragment>
          {props.isLogin ?
            (<button className="navbar__container__button" type="button" onClick={signOut}>Sign out</button>) :
            (<Link to="/users/signin"><div className="navbar__container__button">Sign in</div></Link>)}
        </Fragment>
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
  </Fragment>)
}

export default Navbar