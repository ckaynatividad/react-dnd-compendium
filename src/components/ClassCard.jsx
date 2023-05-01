import React from "react";
import { Link } from "react-router-dom";
import NameCard from "./NameCard";

export default function ClassCard({
  classes,
  profs,
  subclasses,
  multiClass,
  startEquip,
  equipOptions,
  profChoices,
  saveThrows,
}) {
  return (
    <div>
      <h1>{classes.name}</h1>
      <p>Hit Die: {classes.hit_die}</p>
      <h3>Proficiencies</h3>
      {profs.map((prof, i) => (
        <Link to={`/proficiencies/${prof.index}`} key={i}>
          <NameCard props={prof} />
        </Link>
      ))}
      <h3>Proficiency Choices</h3>
      {profChoices.map((profC, i) => (
        <p>{profC.desc}</p>
      ))}
      <h3>Subclasses</h3>
      {subclasses.length === 0
        ? "None"
        : subclasses.map((subClass, i) => (
            <Link to={`/subclasses/${subClass.index}`} key={i}>
              <NameCard props={subClass} />
            </Link>
          ))}
      <h3>Multi classes</h3>
      {/* {multiClass.map((classes, i) => (
        <p>{classes}</p>
      ))} */}
      <h3>Starting Equipment</h3>

      <h3>Starting Equipment Options</h3>
      {equipOptions.map((opt, i) => (
        <p>{opt.desc}</p>
      ))}
      <h3>Saving Throws</h3>
      {saveThrows.map((save, i) => (
        <NameCard props={save} />
      ))}
    </div>
  );
}
