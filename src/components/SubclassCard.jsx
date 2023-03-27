import React from "react";

export default function SubclassCard({ subclasses }) {
  return (
    <div>
      <h3>{subclasses.name}</h3>
      <p>{subclasses.subclass_flavor}</p>
      <p>{subclasses.desc}</p>
    </div>
  );
}
