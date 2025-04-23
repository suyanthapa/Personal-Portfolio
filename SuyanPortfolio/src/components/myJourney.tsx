import React from 'react';

const data = {
  education: [
    {
      year: '2017 - 2018',
      title: 'Master Degree - University',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquam soluta vero iure. Expedita quo aut delectus modi totam possimus.',
    },
    {
      year: '2018 - 2019',
      title: 'Master Degree - University',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquam soluta vero iure. Expedita quo aut delectus modi totam possimus.',
    },
    {
      year: '2019 - 2020',
      title: 'Master Degree - University',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquam soluta vero iure. Expedita quo aut delectus modi totam possimus.',
    },
  ],
  experience: [
    {
      year: '2017 - 2018',
      title: 'Web Developer - Company',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquam soluta vero iure. Expedita quo aut delectus modi totam possimus.',
    },
    {
      year: '2018 - 2019',
      title: 'Web Developer - Company',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquam soluta vero iure. Expedita quo aut delectus modi totam possimus.',
    },
    {
      year: '2019 - 2020',
      title: 'Web Developer - Company',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquam soluta vero iure. Expedita quo aut delectus modi totam possimus.',
    },
  ]
};

const MyJourney: React.FC = () => {
  return (
    <div id='myJourney'>

  
    <section className=" bg-[#081b29]  pt-15 text-white py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">
        My <span className="text-blue-500">Journey</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            {data.education.map((item, index) => (
              <div key={index} className="relative border border-blue-500 rounded-lg p-4 bg-[#1E293B] shadow-md">
                <div className="absolute -left-4 top-6 w-3 h-3 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-blue-400 font-semibold">{item.year}</p>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Experience</h3>
          <div className="space-y-6">
            {data.experience.map((item, index) => (
              <div key={index} className="relative border border-blue-500 rounded-lg p-4 bg-[#1E293B] shadow-md">
                <div className="absolute -left-4 top-6 w-3 h-3 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-blue-400 font-semibold">{item.year}</p>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MyJourney;
