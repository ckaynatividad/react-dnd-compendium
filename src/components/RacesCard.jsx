import React from "react";

export default function RacesCard({ races, lang, ability, traits }) {
  return (
    <div>
      <h3>{races.name}</h3>
      <h3>Ability bonuses</h3>
      {ability.map((ab) => (
        <p>
          {ab.ability_score.name} +{ab.bonus}
        </p>
      ))}
      <p></p>
      <h3>Age</h3>
      <p>{races.age}</p>
      <h3>Alignment</h3>
      <p>{races.alignment}</p>
      <h3>Languages</h3>
      <p>{races.language_desc}</p>
      {lang.map((l) => (
        <p>{l.name}</p>
      ))}
      <h3>Size</h3>
      <p>{races.size}</p>
      <p>{races.size_description}</p>
      <h3>Speed</h3>
      <p>{races.speed}</p>
      <h3>Traits</h3>
      {traits.map((t) => (
        <p>{t.name}</p>
      ))}
    </div>
  );
}
