import React, { Component } from "react";

// Stateless Functional Component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <span className="badge badge-pill badge-secondary badge-sm">
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;
