import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="header-nav">
        <NavLink to="/" className="header-nav-link">Home</NavLink>
        <NavLink to="/characters" className="header-nav-link">Characters</NavLink>
        <NavLink to="/locations" className="header-nav-link">Locations</NavLink>
      </div>
    </header>
  );
}