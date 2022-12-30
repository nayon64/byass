import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container d-flex justify-content-end py-2">
      {/* mobile navbar  */}
      <div className="d-md-none w-100 ">
        {/* Humburgur Menu */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="d-flex justify-content-end p-2"
        >
          {isOpen ? <BsXLg /> : <FaBars />}
        </div>
        <div className={`w-100 ${isOpen ? "d-block" : "d-none"} `}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item">Option 1</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Option 2</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Option 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* desktop navbar  */}
      <div className="d-none d-md-block">
        <ul className="navbar-nav list-group list-group-horizontal">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>

          <li className="nav-item dropdown ms-4">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul
              className="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item">Option 1</Link>
              </li>
              <li>
                <Link className="dropdown-item">Option 2</Link>
              </li>
              <li>
                <Link className="dropdown-item">Option 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link">LogOut</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
