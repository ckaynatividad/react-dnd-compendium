import React, { useEffect, useState } from "react";
import ClassesCard from "../components/ClassesCard";
import { getClasses } from "../services/api";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClasses();
      setClasses(data);
    };
    fetchData();
    setLoading(false);
  }, []);

  // console.log("CLASSES", classes);

  if (loading) return <h1>loading....</h1>;
  return (
    <div>
      <h1>Classes</h1>
      {classes.map((classes, i) => (
        <ClassesCard key={i} props={classes} />
      ))}
    </div>
  );
}
