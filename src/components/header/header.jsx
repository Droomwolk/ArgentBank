import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/argentBankLogo.png';
import { logout } from '../../redux/userSlice';
import { getUserDetails } from '../../redux/userActions';
import '../../scss/main.scss';

function Header() {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }
    // else {
    //   return 
    // }
  }, [userToken, dispatch]);

  if (!userInfo) {
    return (
      <nav className="header">
        <NavLink to="/" className="header__logo">
          <img
            className="header__logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="header__logo-title">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/login" className="header-item">
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
          </NavLink>
        </div>
      </nav>

    );
  }
  if (userInfo) {
    return (
      <nav className="header">
        <NavLink to="/" className="header__logo">
          <img
            className="header__logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </NavLink>
        <div>
          <NavLink to="/profile" className="header-item">
            <FontAwesomeIcon icon={faUserCircle} /> {userInfo ? userInfo.body.firstName : "You're not logged in"}
          </NavLink>
          <NavLink to="/" className="header-item">
            <FontAwesomeIcon icon={faSignOut} />
            <span onClick={() => dispatch(logout())}> Sign Out</span>
          </NavLink>
        </div>
      </nav>

    );
  }
}

export default Header;
