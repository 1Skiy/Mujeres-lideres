import React, { useContext } from 'react';
import logo from '../assets/logo2.svg';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const Navbar = () => {

    const navigate = useNavigate()
    const { logout, currentUser } = useContext(AuthContext);
    const loggedOut = () => {
      logout();
      navigate("/");
    }
  return (
    <>
      <div className="navbar">
        <div className="container">
          <Link className='link' to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          </Link>
          <div className="links">
            <Link to="/?cat=art" className="link">
              <h6>ARTE</h6>
            </Link>
            <Link to="/?cat=science" className="link">
              <h6>CIENCIA</h6>
            </Link>
            <Link to="/?cat=technology" className="link">
              <h6>LIDERAZGO</h6>
            </Link>
            <Link to="/?cat=movies" className="link">
              <h6>PELICULAS</h6>
            </Link>
            <Link to="/?cat=politics" className="link">
              <h6>POLITICA</h6>
            </Link>
            <Link to="/?cat=lifestyle" className="link">
              <h6>INNOVACIÓN</h6>
            </Link>

            <span className="Home">
              <Link className="link" to="/home">
                Home
              </Link>
            </span>

            {currentUser ? (
              <>
                <span>{ currentUser.uname}</span>
                <span onClick={loggedOut}>Logout</span>
              </>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            <span className="write">
              <Link className="link" to="/create">
                New
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar