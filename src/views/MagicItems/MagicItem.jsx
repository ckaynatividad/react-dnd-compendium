import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MagicItemCard from "../../components/MagicItemCard";
import { getMagicItem } from "../../services/api";

export default function MagicItem() {
  const { magicItem } = useParams();
  const [item, setItem] = useState({});
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItem(magicItem);
      setItem(data);
      setDesc(data.desc);
    };
    fetchData();
  }, [magicItem]);

  return (
    <div>
      <MagicItemCard item={item} desc={desc} />
    </div>
  );
}
