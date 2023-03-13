import React from "react";
import { Link } from "react-router-dom";

export default function NameCard({ props }) {
  return (
    <div className="name-card">
      <h3>{props.name}</h3>
    </div>
  );
}
