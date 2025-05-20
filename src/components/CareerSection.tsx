import React from 'react';

const CareerSection = () => {
  const careers = [
    {
      stream: 'Engineering',
      roles: ['Design Engineer', 'Automation Engineer', 'Project Engineer', 'Quality Engineer'],
      color: 'bg-blue-600'
    },
    {
      stream: 'Computer Science',
      roles: ['Full Stack Developer', 'AI/ML Engineer', 'Data Scientist', 'DevOps Engineer'],
      color: 'bg-teal-600'
    },
    {
      stream: 'Management',
      roles: ['Project Manager', 'Consultant', 'Business Analyst', 'Marketing Specialist'],
      color: 'bg-blue-600'
    },
    {
      stream: 'Law',
      roles: ['Legal Analyst', 'Compliance Officer', 'Legal Associate', 'Corporate Lawyer'],
      color: 'bg-teal-600'
    },
    {
      stream: 'Finance',
      roles: ['Risk Analyst', 'Investment Banking Analyst', 'Financial Consultant', 'Actuary'],
      color: 'bg-blue-600'
    }
  ];

  return (
    <section id="careers" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-[#042556] mb-4">
            Career Categories & Job Roles
          </h2>
          <p className="text-lg text-gray-600">
            Explore the top career pathways tailored to your academic stream.
          </p>
        </div>

        {/* Career Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.03] overflow-hidden"
            >
              {/* Header */}
              <div className={`${career.color} py-4 px-6`}>
                <h3 className="text-lg font-bold text-white tracking-wide">{career.stream}</h3>
              </div>

              {/* Roles */}
              <div className="p-6">
                <ul className="space-y-2">
                  {career.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-start text-gray-700 text-sm">
                      <span className="h-2 w-2 mt-2 rounded-full bg-blue-400 mr-2 shrink-0"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
