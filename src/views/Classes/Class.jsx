import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClassCard from "../../components/ClassCard";
import { getClass } from "../../services/api";

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
      setMultiClass(data.multi_classing);
      setStartEquip(data.starting_equipment);
      setEquipOptions(data.starting_equipment_options);
      setProfChoices(data.proficiency_choices);
      setSaveThrows(data.saving_throws);
    };
    fetchData();
  }, [classItem]);

  return (
    <div className="flex flex-column justify-center">
      <ClassCard
        classes={classes}
        profs={classProf}
        subclasses={subclass}
        multiClass={multiClass}
        startEquip={startEquip}
        equipOptions={equipOptions}
        profChoices={profChoices}
        saveThrows={saveThrows}
      />
    </div>
  );
}
