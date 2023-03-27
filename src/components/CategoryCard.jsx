import React from "react";

export default function CategoryCard({ cat, equipment }) {
  return (
    <div>
      <h3>{cat.name}</h3>
      <h4>Equipment</h4>
      {equipment.map((equip) => (
        <p>{equip.name}</p>
      ))}
    </div>
  );
}
