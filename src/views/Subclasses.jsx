import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../components/NameCard";
import { getSubclass } from "../services/api";

export default function Subclasses() {
  const [subclasses, setSubclasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubclass("");
      setSubclasses(data.results);
    };
    fetchData();
    setLoading(false);
  }, []);
  console.log(subclasses);
  return (
    <div>
      Subclasses
      {subclasses.map((item) => (
        <Link to={`/subclasses/${item.index}`}>
          <NameCard props={item} />
        </Link>
      ))}
    </div>
  );
}
