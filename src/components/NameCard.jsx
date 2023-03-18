import React from "react";

export default function NameCard({ props }) {
  return (
    <div className="name-card">
      <p>{props.name}</p>
    </div>
  );
}
