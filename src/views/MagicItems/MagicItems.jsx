import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameCard from "../../components/NameCard";
import { getMagicItem } from "../../services/api";

export default function MagicItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItem();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="magic-items">
      <h1>Magic Items</h1>
      {items.map((item, i) => (
        <Link to={`/magic-items/${item.index}`} key={i}>
          <h3>
            <NameCard props={item} />
          </h3>
        </Link>
      ))}
    </div>
  );
}
