import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MagicItemCard from "../components/MagicItemCard";
import { getMagicItem } from "../services/api";

export default function MagicItem() {
  const { magicItem } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItem(magicItem);
      setItem(data);
    };
    fetchData();
    setLoading(false);
  }, [magicItem]);

  console.log(item);
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div>
      <MagicItemCard props={item} />
    </div>
  );
}
