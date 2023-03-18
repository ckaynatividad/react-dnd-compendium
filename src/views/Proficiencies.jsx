import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../components/NameCard";
import { getProficiencies } from "../services/api";

export default function Proficiencies() {
  const [prof, setProf] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProficiencies();
      setProf(data);
    };
    fetchData();
  }, []);

  console.log(prof);
  return (
    <div>
      Proficiencies
      {prof.map((i) => (
        <Link to={`/proficiencies/${i.index}`}>
          <NameCard props={i} />
        </Link>
      ))}
    </div>
  );
}
