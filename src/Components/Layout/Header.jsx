import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <img
          src="/logo192.png"
          style={{ height: "35px", verticalAlign: "top" }}
          alt="React"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
