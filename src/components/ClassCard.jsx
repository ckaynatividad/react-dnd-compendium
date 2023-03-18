import React from "react";
import { Link } from "react-router-dom";
import NameCard from "./NameCard";

export default function ClassCard({ classes, profs, subClasses }) {
  return (
    <div>
      <p>Name: {classes.name}</p>
      <p>Desc: {classes.hit_die}</p>
      <h3>Proficiencies</h3>
      {profs.map((i) => (
        <Link to={`/proficiencies/${i.index}`} key={i.index}>
          <NameCard props={i} />
        </Link>
      ))}
      <h3>Subclasses</h3>
      {subClasses.map((i) => (
        <Link to={`/subclasses/${i.index}`} key={i.index}>
          <NameCard props={i} />
        </Link>
      ))}
    </div>
  );
}
