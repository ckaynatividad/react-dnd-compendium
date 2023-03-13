import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMagicItem } from "../services/api";

export default function MagicItem() {
  const { params } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItem(params);
      setItem(data);
    };
    fetchData();
  }, [params]);

  console.log(item);

  return <div>{params}</div>;
}
