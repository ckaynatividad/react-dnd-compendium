import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/magic-items">Magic Items</Link>
      <Link to="/classes">Classes</Link>
    </nav>
  );
}
