import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClass } from "../services/api";

export default function Class() {
  const { classItem } = useParams();
  const [classes, setClasses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClass(classItem);
      setClasses(data);
    };
    fetchData();
  }, [classItem]);

  console.log(classes);

  return <div>{classes.name}</div>;
}
