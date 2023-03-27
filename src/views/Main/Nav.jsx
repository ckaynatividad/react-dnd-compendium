import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/magic-items">Magic Items</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/subclasses">Subclasses</Link>
      <Link to="/proficiencies">Proficiencies</Link>
      <Link to="/races">Races</Link>
      <Link to="/equipment-categories">Equipment Categories</Link>
    </nav>
  );
}
