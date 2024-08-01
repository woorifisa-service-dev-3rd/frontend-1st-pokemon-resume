import React from "react";
import Image from "next/image";

const SkillStack = ({ skill }) => {
  const { name, img_url } = skill;
  return (
    <div style={{ marginBottom: "0.3rem" }}>
      <img src={img_url} alt={name} style={{ width: "5vw", height: "2.5vh" }} />
    </div>
  );
};

export default SkillStack;
