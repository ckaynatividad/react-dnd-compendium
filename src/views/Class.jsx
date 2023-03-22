import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import { getClass } from "../services/api";

export default function Class() {
  const { classItem } = useParams();
  const [classes, setClasses] = useState({});
  const [classProf, setClassProf] = useState([]);
  const [subclass, setSubclass] = useState([]);
  const [multiClass, setMultiClass] = useState({});
  const [startEquip, setStartEquip] = useState([]);
  const [equipOptions, setEquipOptions] = useState([]);
  const [profChoices, setProfChoices] = useState([]);
  const [saveThrows, setSaveThrows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClass(classItem);
      setClasses(data);
      setClassProf(data.proficiencies);
      setSubclass(data.subclasses);
    };
    fetchData();
  }, [classItem]);

  // console.log("CLASS", classes);

  return (
    <div className="classView">
      <ClassCard classes={classes} profs={classProf} subclasses={subclass} />
    </div>
  );
}
