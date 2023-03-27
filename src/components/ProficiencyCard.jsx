import React from "react";
import { Link } from "react-router-dom";
import NameCard from "./NameCard";

export default function ProficiencyCard({ prof, classes, races }) {
  return (
    <div>
      <h3>{prof.name}</h3>
      <h3>Type</h3>
      <p>{prof.type}</p>
      <h3>Classes</h3>
      {classes.length === 0
        ? "None"
        : classes.map((classItem, i) => (
            <Link to={`/classes/${classItem.index}`} key={i}>
              <NameCard props={classItem} />
            </Link>
          ))}
      <h3>Races</h3>
      {races.length === 0
        ? "None"
        : races.map((race, i) => (
            <Link to={`/races/${race.index}`} key={i}>
              <NameCard props={race} />
            </Link>
          ))}
      {races.map((race, i) => (
        <Link key={i}>
          <NameCard props={races} />
        </Link>
      ))}
    </div>
  );
}
