import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProficiencies } from "../services/api";

export default function Proficiency() {
  const { proficiency } = useParams();
  const [prof, setProf] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProficiencies(proficiency);
      setProf(data);
    };
    fetchData();
  }, [proficiency]);
  console.log(prof);
  return <div>{prof.name}</div>;
}
