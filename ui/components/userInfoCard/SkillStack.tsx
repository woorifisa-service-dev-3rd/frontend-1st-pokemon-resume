import React from "react";
import Image from "next/image";

const SkillStack = ({ skill }) => {
  const { name, img_url } = skill;
  return (
    <div style={{ marginBottom: "0.2rem" }}>
      <img src={img_url} alt={name} style={{ width: "4rem", height: "2rem" }} />
    </div>
  );
};

export default SkillStack;
