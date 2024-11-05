import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const token = window.localStorage.getItem("token");
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              New Post
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/info"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Info
          </NavLink>
        </li>
        {!token && (
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Register/Login
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
