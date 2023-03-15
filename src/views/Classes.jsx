import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../components/NameCard";
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
        <Link to={`/classes/${classes.index}`} key={classes.index}>
          <NameCard key={i} props={classes} />
        </Link>
      ))}
    </div>
  );
}
