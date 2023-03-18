import React from "react";

export default function MagicItemCard({ item, desc }) {
  const [typeRarity, ...rest] = desc;

  return (
    <div>
      <p>Name: {item.name}</p>
      <h3>Type, Rarity:</h3>
      <p>{typeRarity}</p>
      <h3>Desc</h3>
      {rest.map((desc, i) => (
        <p key={i}>{desc}</p>
      ))}
    </div>
  );
}
