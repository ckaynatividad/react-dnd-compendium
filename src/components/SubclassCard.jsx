import React from "react";

export default function SubclassCard({ subclasses }) {
  return (
    <div>
      <span>{subclasses.name}</span>
      <span>{subclasses.subclass_flavor}</span>
      <span>{subclasses.desc}</span>
    </div>
  );
}
