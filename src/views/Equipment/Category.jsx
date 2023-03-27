import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import { getEqCategories } from "../../services/api";

export default function Category() {
  const { category } = useParams();
  const [cat, setCat] = useState({});
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEqCategories(category);
      setCat(data);
      setEquipment(data.equipment);
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <CategoryCard cat={cat} equipment={equipment} />
    </div>
  );
}
