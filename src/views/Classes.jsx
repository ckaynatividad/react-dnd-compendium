import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../components/NameCard";
import { getClass } from "../services/api";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClass("");
      setClasses(data.results);
    };
    fetchData();
    setLoading(false);
  }, []);

  // console.log("CLASSES", classes);

  return loading ? (
    <h1>LOADING...</h1>
  ) : (
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
