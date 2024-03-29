import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProficiencies } from "../../services/api";
import ProficiencyCard from "../../components/ProficiencyCard";

export default function Proficiency() {
  const { proficiency } = useParams();
  const [prof, setProf] = useState({});
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProficiencies(proficiency);
      setProf(data);
      setRaces(data.races);
      setClasses(data.classes);
    };
    fetchData();
  }, [proficiency]);

  return (
    <div>
      <ProficiencyCard prof={prof} classes={classes} races={races} />
    </div>
  );
}
