import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../../components/NameCard";
import { getRaces } from "../../services/api";

export default function Races() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRaces();
      setRaces(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      Races
      {races.map((race, i) => (
        <Link to={`/races/${race.index}`} key={i}>
          <NameCard props={race} />
        </Link>
      ))}
    </div>
  );
}
