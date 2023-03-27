import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NameCard from "../components/NameCard";
import { getEqCategories } from "../services/api";

export default function EquipmentCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEqCategories();
      setCategories(data);
    };
    fetchData();
  }, []);
  console.log(categories);
  return (
    <div>
      {categories.map((cat, i) => (
        <Link to={`/equipment-categories/${cat.index}`} key={i}>
          <NameCard props={cat} />
        </Link>
      ))}
    </div>
  );
}
