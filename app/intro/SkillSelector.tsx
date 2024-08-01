import React, { useState } from "react";
import { message } from "antd";

interface Skill {
  id: string;
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { id: 'html', name: 'HTML', logo: 'https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white' },
  { id: 'css', name: 'CSS', logo: 'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white' },
  { id: 'javascript', name: 'JavaScript', logo: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black' },
  { id: 'react', name: 'React', logo: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black' },
  { id: 'nextjs', name: 'Next.js', logo: 'https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white' },
  { id: 'typescript', name: 'TypeScript', logo: 'https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white' },
  { id: 'java', name: 'Java', logo: 'https://img.shields.io/badge/Java-F80000?style=flat&logo=Oracle&logoColor=white' },
  { id: 'python', name: 'Python', logo: 'https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white' },
  { id: 'spring', name: 'Spring', logo: 'https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=Spring&logoColor=white' },
  { id: 'vuejs', name: 'Vue.js', logo: 'https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white' },
  { id: 'linux', name: 'Linux', logo: 'https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black' },
  { id: 'git', name: 'Git', logo: 'https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white' }
];

const SkillSelector: React.FC<{ onSkillsSelected: (skills: Skill[]) => void }> = ({ onSkillsSelected }) => {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  const toggleSkill = (skill: Skill) => {
    if (selectedSkills.some(s => s.id === skill.id)) {
      setSelectedSkills(selectedSkills.filter(s => s.id !== skill.id));
    } else {
      if (selectedSkills.length >= 4) {
        message.warning("You can only select up to 4 skills.");
        return;
      }
      setSelectedSkills([...selectedSkills, skill]);
    }
    onSkillsSelected(selectedSkills);
  };

  return (
    <div className="text-center">
      <h2 className="text-lg font-medium mb-4">기술 스택 선택 (최대 4개)</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <div
            key={skill.id}
            className={`border-2 rounded-lg cursor-pointer p-1 transition duration-300 ${
              selectedSkills.some(s => s.id === skill.id)
                ? 'border-blue-500'
                : 'border-gray-200'
            }`}
            onClick={() => toggleSkill(skill)}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-6 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSelector;
