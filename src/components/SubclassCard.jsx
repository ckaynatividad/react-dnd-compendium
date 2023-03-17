import React from "react";

export default function SubclassCard({ props }) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.subclass_flavor}</span>
      <span>{props.desc}</span>
    </div>
  );
}
