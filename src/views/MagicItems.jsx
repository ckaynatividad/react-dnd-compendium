import React, { useEffect, useState } from "react";
import MagicItemsCard from "../components/MagicItemsCard";
import { getMagicItems } from "../services/api";

export default function MagicItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItems();
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // console.log("MAGIC ITEMS", items);

  if (loading) return <h1>loading...</h1>;
  return (
    <div className="magic-items">
      <h1>Magic Items</h1>
      {items.map((item, i) => (
        <MagicItemsCard key={i} items={item} />
      ))}
    </div>
  );
}
