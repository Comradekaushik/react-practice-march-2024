import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';


export default function Navbar() {


    const location = useLocation();
    // const shouldShowNavbar = location.pathname !== '/about';
    const shouldShowNavbar = location.pathname == '/';
  return (

    <div>


{shouldShowNavbar && (
        <div>
          <div>Navbar</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/data">Contact</Link>
              </li>
              <li>
                <Link to="/about/component1">Component 1</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
    
  )
}







