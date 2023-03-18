import React from "react";
import { Link } from "react-router-dom";
import NameCard from "./NameCard";

export default function ClassCard({ classes, profs, subclasses }) {
  return (
    <div>
      <p>Name: {classes.name}</p>
      <p>Desc: {classes.hit_die}</p>
      <h3>Proficiencies</h3>
      {profs.map((prof, i) => (
        <Link to={`/proficiencies/${prof.index}`} key={i}>
          <NameCard props={prof} />
        </Link>
      ))}
      <h3>Subclasses</h3>
      {subclasses.map((classes, i) => (
        <Link to={`/subclasses/${subclasses.index}`} key={i}>
          <NameCard props={subclasses} />
        </Link>
      ))}
    </div>
  );
}
