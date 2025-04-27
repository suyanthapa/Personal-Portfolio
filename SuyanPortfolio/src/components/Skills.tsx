import React from 'react';

const skills = {
  programmingLanguages: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Solidity'],
  frameworksLibraries: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  developerTools: ['Git & GitHub', 'VS Code', 'Postman', 'MongoDB Compass'],
  webTechnologies: ['REST APIs', 'HTML5', 'REST APIs'],
};

const Skills: React.FC = () => {
  const renderSkillList = (title: string, skillItems: string[]) => (
    <div className="bg-[#1E293B] p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-200">
        {skillItems.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (

    <div id="skills">
    <section className="bg-[#0F172A] text-white py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">
        My <span className="text-blue-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {renderSkillList('Programming Languages', skills.programmingLanguages)}
        {renderSkillList('Frameworks & Libraries', skills.frameworksLibraries)}
        {renderSkillList('Developer Tools', skills.developerTools)}
        {renderSkillList('Web Technologies', skills.webTechnologies)}
      </div>
    </section>
    </div>
  );
};

export default Skills;
