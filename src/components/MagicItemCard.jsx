import React from "react";

export default function MagicItemCard({ props }) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Desc: {props.desc ? props.desc[0].split(/[)$]/)[0] + ")" : ""}</p>
      <p>Rarity: {props.rarity?.name}</p>
    </div>
  );
}
