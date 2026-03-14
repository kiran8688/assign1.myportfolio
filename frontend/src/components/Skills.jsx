import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 60 },
    { name: 'CSS', percentage: 30 },
    { name: 'BOOTSTRAP', percentage: 50 },
    { name: 'JavaScript', percentage: 20 },
    { name: 'Photoshop', percentage: 10 },
  ];

  return (
    <section id="skills" className="py-16 bg-background lg:ml-[100px]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold uppercase text-secondary relative inline-block pb-4 mb-4">
            Skills
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gray-300"></span>
            <span className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-10 h-[3px] bg-primary"></span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {skills.slice(0, 3).map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between font-semibold text-secondary uppercase mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full h-[10px] bg-gray-200">
                  <div className="h-full bg-primary" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
             {skills.slice(3).map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between font-semibold text-secondary uppercase mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full h-[10px] bg-gray-200">
                  <div className="h-full bg-primary" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
