import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/orders"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        My orders
      </NavLink>
      <NavLink
        to="/admin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Admin
      </NavLink>
    </div>
  );
}

export default NavBar;
