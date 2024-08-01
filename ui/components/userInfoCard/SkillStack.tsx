import React from "react";
import Image from "next/image";

const SkillStack = ({ skill }) => {
  const { name, img_url } = skill;
  return (
    <div>
      {/* <Image src={img_url} alt={name} width={100} height={100} /> */}
      <img src={img_url} alt={name} width={100} height={100} />
    </div>
  );
};

export default SkillStack;
