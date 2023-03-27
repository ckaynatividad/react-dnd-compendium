import React from "react";
import { Link } from "react-router-dom";

export default function MagicItemCard({ item, desc }) {
  const [typeRarity, ...rest] = desc;

  return (
    <div>
      <h3>Name: {item.name}</h3>
      <h3>Equipment Category:</h3>
      <Link to={`/equipment-categories/${item.equipment_category?.index}`}>
        <p>{item.equipment_category?.name}</p>
      </Link>
      <h3>Type, Rarity:</h3>
      <p>{typeRarity}</p>
      <h3>Desc</h3>
      {rest.map((desc, i) => (
        <p key={i}>{desc}</p>
      ))}
    </div>
  );
}
