import React from 'react'
import { Link } from 'react-router-dom';


const SignedInLinks = () => {
  return (
    <>
          <ul className="right navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/" className="nav-link">Log Out</Link>
              </li>
              <li className="navbar-item">
                  <Link to="/" className="nav-link">F&LName</Link>
              </li>
      </ul>
    </>
  )
}

export default SignedInLinks
