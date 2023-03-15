import React from "react";
import { Link } from "react-router-dom";

export default function NameCard({ props }) {
  return (
    <div className="name-card">
      <span>{props.name}</span>
    </div>
  );
}
