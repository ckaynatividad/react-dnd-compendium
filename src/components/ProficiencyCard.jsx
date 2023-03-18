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
        ? classes.map((classItem, i) => (
            <Link to={`/classes/${classItem.index}`} key={i}>
              <NameCard props={classItem} />
            </Link>
          ))
        : "None"}
      <h3>Races</h3>
      {races.map((race, i) => (
        <Link key={i}>
          <NameCard props={races} />
        </Link>
      ))}
    </div>
  );
}
