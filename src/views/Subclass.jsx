import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubclassCard from "../components/SubclassCard";
import { getSubclass } from "../services/api";

export default function Subclass() {
  const { subclass } = useParams();
  const [subclasses, setSubclasses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubclass(subclass);
      setSubclasses(data);
    };
    fetchData();
  }, [subclass]);

  //   console.log(subclasses);
  return (
    <div>
      <SubclassCard props={subclasses} key={subclasses.index} />
    </div>
  );
}
