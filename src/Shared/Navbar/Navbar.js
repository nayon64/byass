import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
	const [isOpen,setIsOpen]=useState(false)
  return (
    <nav className="w-100 d-flex justify-content-end px-3 px-sm-5 py-2">
      <div className="d-md-none w-100 ">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="d-flex justify-content-end p-2"
        >
          {isOpen ? <BsXLg /> : <FaBars />}
        </div>
        <div className={`w-100 ${isOpen?"d-block":"d-none"} `}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>

            <li class="nav-item dropdown ">
              <a
                class="nav-link "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu text-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link class="dropdown-item">Option 1</Link>
                </li>
                <li>
                  <Link class="dropdown-item">Option 2</Link>
                </li>
                <li>
                  <Link class="dropdown-item">Option 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-none d-md-block">
        <ul className="navbar-nav list-group list-group-horizontal">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>

          <li class="nav-item dropdown ms-4">
            <a
              class="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul
              class="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link class="dropdown-item">Option 1</Link>
              </li>
              <li>
                <Link class="dropdown-item">Option 2</Link>
              </li>
              <li>
                <Link class="dropdown-item">Option 2</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
