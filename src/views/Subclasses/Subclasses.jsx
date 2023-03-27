import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../../components/NameCard";
import { getSubclass } from "../../services/api";

export default function Subclasses() {
  const [subclasses, setSubclasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubclass();
      setSubclasses(data);
    };
    fetchData();
    setLoading(false);
  }, []);

  return loading ? (
    <h2>loading...</h2>
  ) : (
    <div>
      Subclasses
      {subclasses.map((classes, i) => (
        <Link to={`/subclasses/${classes.index}`} key={i}>
          <NameCard props={classes} />
        </Link>
      ))}
    </div>
  );
}
