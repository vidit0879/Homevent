import React from 'react';
import { Computer, Settings, Book, Scale, TrendingUp } from 'lucide-react';

const EligibilitySection = () => {
  const disciplines = [
    { name: 'Computer Science', icon: <Computer className="h-6 w-6" /> },
    { name: 'Engineering', icon: <Settings className="h-6 w-6" /> },
    { name: 'Management', icon: <Book className="h-6 w-6" /> },
    { name: 'Law', icon: <Scale className="h-6 w-6" /> },
    { name: 'Actuarial Science', icon: <TrendingUp className="h-6 w-6" /> },
    { name: 'Quantitative Finance', icon: <TrendingUp className="h-6 w-6" /> },
    { name: 'General Finance', icon: <TrendingUp className="h-6 w-6" /> },
  ];

  return (
    <section id="eligibility" className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-[#042556] mb-4">
            Who Can Participate?
          </h2>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Eligibility: Only final-year students from the following disciplines
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {disciplines.map((discipline, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-xl transition-transform hover:scale-105"
            >
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 shadow-sm">
                {discipline.icon}
              </div>
              <span className="font-semibold text-gray-800">{discipline.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
