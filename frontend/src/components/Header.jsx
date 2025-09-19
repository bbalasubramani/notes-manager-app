import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, onLogout }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Notes Manager</Link>
      </div>
      <nav>
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;