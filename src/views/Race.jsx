import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRaces } from "../services/api";

export default function Race() {
  const { race } = useParams();
  const [races, setRaces] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRaces(race);
      setRaces(data);
    };
    fetchData();
  }, [race]);
  //   console.log(races);
  return <div>{races.name}</div>;
}
