import React, { useState } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <BrowserRouter>
      <div class="nav-container">
        <div class="container">
          <nav class="navbar">
            <h1 id="navbar-logo">LOGO</h1>
            <div
              id="mobile-menu"
              onClick={() => {
                setIsActive(!isActive);
                setActive(!active);
              }}
              class={`menu-toggle ${isActive && "is-active"}`}
            >
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>

            <ul
              class={`nav-menu ${active && "active"}`}
              onClick={() => {
                setActive(false);
                setIsActive(false);
              }}
            >
              <li>
                <NavLink to="#" class="nav-links active-btn">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="#" class="nav-links">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="#" class="nav-links">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="#" class="nav-links">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="#" class="nav-links nav-links-btn">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
}
