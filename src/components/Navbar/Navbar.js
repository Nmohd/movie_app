import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import nav_logo from "../../assets/najeeb.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const logout =() => {
    sessionStorage.clear()
  }


  return (
    <>
      <IconContext.Provider value={{ color: "rgb(8, 7, 7)" }}>
        <nav className="bar">
          <div className="bar-cont cont">
            <Link to="/home" className="bar-logo" onClick={closeMobileMenu}>
              <img src={nav_logo} alt="mavlogo" style={{ width: "65px" }} />
            </Link>
            <div className="enu-icon" onClick={handleClick}>
              {click ? <GrFormClose /> : <FiMenu />}
            </div>
            <ul className={click ? "van-enu active" : "van-enu"}>
              <li className="van-item custhome">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    "van-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="van-item custvol">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    "van-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Language
                </NavLink>
              </li>

              <li className="van-item">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    "van-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Genre
                </NavLink>
              </li>
              <li className="van-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "van-links" + (isActive ? " activated" : "")
                  }
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
