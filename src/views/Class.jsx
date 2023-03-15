import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NameCard from "../components/NameCard";
import { getClass } from "../services/api";

export default function Class() {
  const { classItem } = useParams();
  const [classes, setClasses] = useState({});
  const [classProf, setClassProf] = useState([]);
  const [subclass, setSubclass] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClass(classItem);
      setClasses(data);
      setClassProf(data.proficiencies);
      setSubclass(data.subclasses);
    };
    fetchData();
  }, [classItem]);

  return (
    <div className="classView">
      <span>{classes.name}</span>
      <span>{classes.hit_die}</span>
      <h3>Proficiencies</h3>
      <span className="classProf">
        {classProf.map((i) => (
          <NameCard props={i} />
        ))}
      </span>
      <h3>Subclasses</h3>
      <span>
        {subclass.map((i) => (
          <NameCard props={i} />
        ))}
      </span>
    </div>
  );
}
