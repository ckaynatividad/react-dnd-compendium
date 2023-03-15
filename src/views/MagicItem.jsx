import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMagicItem } from "../services/api";

export default function MagicItem() {
  const { magicItem } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItem(magicItem);
      setItem(data);
    };
    fetchData();
  }, [magicItem]);

  // console.log(magicItem);
  // console.log(item);
  return (
    <div>
      <span>{item.name}</span>
    </div>
  );
}
