import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RacesCard from "../components/RacesCard";
import { getRaces } from "../services/api";

export default function Race() {
  const { race } = useParams();
  const [races, setRaces] = useState({});
  const [lang, setLang] = useState([]);
  const [ability, setAbility] = useState([]);
  const [traits, setTraits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRaces(race);
      setRaces(data);
      setLang(data.languages);
      setAbility(data.ability_bonuses);
      setTraits(data.traits);
    };
    fetchData();
  }, [race]);

  // console.log(races);
  return (
    <div>
      <RacesCard races={races} lang={lang} ability={ability} traits={traits} />
    </div>
  );
}
