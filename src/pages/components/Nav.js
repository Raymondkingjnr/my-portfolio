import React from "react";
import "../components/navcomponents/Nav.css";

function Nav() {
  return (
    <nav>
      <main className="Nav--bar">
        <h2 className="logo ">hello ;</h2>
        <div className="list-item">
          <h4 className="active"> home</h4>
          <h4>about</h4>
          <h4>experience</h4>
          <h4>my work</h4>
          <h4>contact</h4>
        </div>
      </main>
    </nav>
  );
}

export default Nav;
