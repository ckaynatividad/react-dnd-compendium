import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../components/NameCard";
import { getProficiencies } from "../services/api";

export default function Proficiencies() {
  const [profs, setProf] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProficiencies();
      setProf(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      Proficiencies
      {profs.map((prof, i) => (
        <Link to={`/proficiencies/${prof.index}`} key={i}>
          <NameCard props={prof} />
        </Link>
      ))}
    </div>
  );
}
