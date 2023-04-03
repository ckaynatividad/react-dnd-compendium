import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../../components/NameCard";
import { getClass } from "../../services/api";

export default function Classes() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClass();
      setClasses(data);
    };
    fetchData();
  }, []);

  <div>
    <h1>Classes</h1>
    {classes.map((classes, i) => (
      <Link to={`/classes/${classes.index}`} key={i}>
        <h3>
          <NameCard props={classes} />
        </h3>
      </Link>
    ))}
  </div>;
}
