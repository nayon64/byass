import {motion} from "framer-motion"
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const ExtraNavbar = () => {
	const [width, setWidth] = useState(0)
	const dragging=useRef()
	useEffect(() => {
		setWidth(dragging.current.scrollWidth - dragging.current.offsetWidth)
		console.log(dragging.current.scrollWidth, dragging.current.offsetWidth);
	},[])

	return (
    <div>
      <motion.div className="mt-4 " ref={dragging}>
        <motion.div
					drag="x"
					dragConstraints={{right:0,left:-width}}
          className="navbar-nav list-group list-group-horizontal"
        >
          <li className="nav-item dropdown">
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
                <Link className="dropdown-item">Option 1</Link>
              </li>
              
            </ul>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link">Filter1</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link">Filter2</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link">Filter3</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link">Filter4</Link>
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExtraNavbar;