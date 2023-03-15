import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubclass } from "../services/api";

export default function Subclass() {
  const { subclass } = useParams();
  const [subclasses, setSubclasses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubclass(subclass);
      setSubclasses(data);
    };
    fetchData();
  }, [subclass]);

  //   console.log(subclasses);
  return <div>{subclasses.name}</div>;
}
