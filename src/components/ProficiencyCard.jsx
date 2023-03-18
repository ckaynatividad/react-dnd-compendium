import React from "react";
import { Link } from "react-router-dom";
import NameCard from "./NameCard";

export default function ProficiencyCard({ prof, classes, races }) {
  return (
    <div>
      <p>{prof.name}</p>
      <h3>Type</h3>
      <p>{prof.type}</p>
      <h3>Classes</h3>
      {classes.length === 0
        ? classes.map((i) => (
            <Link to={`/classes/${i.index}`} key={i.index}>
              <NameCard props={i} />
            </Link>
          ))
        : "None"}
      <h3>Races</h3>
      {races.map((i) => (
        <Link key={i.index}>
          <NameCard props={i} />
        </Link>
      ))}
    </div>
  );
}
