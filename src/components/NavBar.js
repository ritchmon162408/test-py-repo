import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../image/CUDHAO logo copy.png';
import AuthContext from "../context/AuthContext";
import Buttons from './Buttons';
import './NavBar.css';

function NavBar() {
  const [user, logout] = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  // function for based resize of web page
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // resizing based user preference
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  // function if user click the logo that navigate from the start
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0 , behavior: "smooth" });
  };

  // Navigation Bar web page
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo and Title */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="CUDHAO-logo" className="logo" />
            <div className="title" onClick={handleLogoClick}>
              <span className="small">CITY OF</span><br />
              <span className="medium">CABUYAO</span><br />
              <span className="large">CUDHAO</span>
              <i className='fab fa-typo3' />
            </div>
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            {/* About CUDHAO Dropdown */}
            <li
              className="nav-item"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}> 
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About ▾
              </Link>
              {aboutDropdown && (
                <ul className='dropdown-menu'>
                  <li>
                    <Link 
                      to='/history'
                      className='dropdown-link'
                      onClick={closeMobileMenu}>
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/who-are-we'
                      className='dropdown-link'
                      onClick={closeMobileMenu}>
                      Who are we
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/mission-vision'
                      className='dropdown-link'
                      onClick={closeMobileMenu}>
                      Mission & Vision
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className="nav-item"
              onMouseEnter={() => setResourceDropdown(true)}
              onMouseLeave={() => setResourceDropdown(false)}>
              <Link to="/resource" className="nav-link" onClick={closeMobileMenu}>
                Resource ▾
              </Link>
              {resourceDropdown && ( 
                <ul className='dropdown-menu'>
                  <li>
                    <Link
                      to='/online-forms'
                      className='dropdown-link'
                      onClick={closeMobileMenu}>
                      Online Forms
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className="nav-item"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}>
              <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
                Services ▾
              </Link>
              {servicesDropdown && (
                <ul className='dropdown-menu'>
                  <li>
                    <Link
                      to='/home-owners'
                      className='dropdown-link'
                      onClick={closeMobileMenu}>
                      Home Owners
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          {/* Button for Sign up and Login */}
<div className="navbar-buttons">
  {user ? (
    <Buttons buttonStyle="btn--outline" onClick={logout}>Logout</Buttons>
  ) : (
    <>
      {button && <Buttons buttonStyle="btn--outline">Sign up</Buttons>}
      {button && <Buttons buttonStyle="btn--primary">Login</Buttons>}
    </>
  )}
</div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
