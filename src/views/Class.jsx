import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClass } from "../services/api";

export default function Class() {
  const { classItem } = useParams();
  const [classes, setClasses] = useState({});
  const [classProf, setClassProf] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClass(classItem);
      setClasses(data);
      setClassProf(data.proficiencies);
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
          <span>{i.name}</span>
        ))}
      </span>
    </div>
  );
}
