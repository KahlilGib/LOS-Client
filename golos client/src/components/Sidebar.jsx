import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faMedal,
  faCog,
  faHome,
  faGrinAlt,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Navigate } from "react-router-dom";

export default function Sidebar() {
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        throw new Error("Failed to logout");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate replace to="/login" />;
  }

  return (
    <nav className="sidebar shadow">
      <div className="menu_content">
        {/* Menu Items */}
        <ul className="menu_items">
          {/* Dashboard */}
          <div className="menu_title menu_dashboard"></div>
          <li className="item navbar-item">
            <a href="#" className="nav_link ">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="navlink">Home</span>
            </a>
          </li>

          {/* Overview */}
          <li className="item navbar-item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faGrinAlt} />
              </span>
              <span className="navlink">Link</span>
            </a>
          </li>
        </ul>

        {/* Menu Items */}
        <ul className="menu_items ">
          {/* Setting */}
          <div className="menu_title menu_setting"></div>
          <li className="item navbar-item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faFlag} />
              </span>
              <span className="navlink">Notice board</span>
            </a>
          </li>
          <li className="item navbar-item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faMedal} />
              </span>
              <span className="navlink">Award</span>
            </a>
          </li>
          <li className="item navbar-item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faCog} />
              </span>
              <span className="navlink">Setting</span>
            </a>
          </li>
          <li className="item navbar-item">
            <a onClick={logout} className="nav_link" target="">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              <span className="navlink" onClick={logout}>
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
