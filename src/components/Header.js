import React, { useState } from "react";
import irgLogoWhite from "../assets/irg_logo.jpg";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="/" className="logo">
          <img src={irgLogoWhite} alt="IRG Logo" />
        </a>

        {/* Hamburger */}
        <button className="menu-btn" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="menu-icon"
          >
            <path
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X (close icon)
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>

            {/* Buying Dropdown */}
            <li className="dropdown">
              <button onClick={() => toggleDropdown("buying")} className="nav-link">
                Buying ▼
              </button>
              {openDropdown === "buying" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/buying/currentlistings">Current Listings</a>
                  </li>
                  <li>
                    <a href="/buying/homesearch">Home Search</a>
                  </li>
                  <li>
                    <a href="/buying/lakeinfoguides">Lake Info Guide</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Selling Dropdown */}
            <li className="dropdown">
              <button onClick={() => toggleDropdown("selling")} className="nav-link">
                Selling ▼
              </button>
              {openDropdown === "selling" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/selling/recentlysold">Recently Sold</a>
                  </li>
                  <li>
                    <a href="/selling/ourmarketingplan">Our Marketing Plan</a>
                  </li>
                  <li>
                    <a href="/selling/preparingyourhomeforsale">Preparing Your Home</a>
                  </li>
                  <li>
                    <a href="/selling/homevaluation">Home Valuation</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="/ourlistings" className="nav-link">
                Our Listings
              </a>
            </li>
            <li>
              <a href="/waterfronthomes" className="nav-link">
                Waterfront Homes
              </a>
            </li>
            <li>
              <a href="/resourceguide" className="nav-link">
                Resource Guide
              </a>
            </li>
            <li>
              <a href="/agents" className="nav-link">
                Agents
              </a>
            </li>
            <li>
              <a href="/contactus" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
