import React from 'react';
import Partnerlogo from './Partnerlogo';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Job Offers',
      description: 'Get hired by top companies across industries',
      iconNum: 1,
    },
    {
      title: 'Cash Prizes',
      description: 'Win substantial cash rewards for top performers',
      iconNum: 2,
    },
    {
      title: 'Premium Subscriptions',
      description: 'Access LinkedIn Learning, Coursera & more',
      iconNum: 3,
    },
    {
      title: 'Certificates',
      description: 'Earn industry-recognized certificates of excellence',
      iconNum: 4,
    },
    {
      title: 'Swag & Merchandise',
      description: 'Exclusive Prep Summit gear for all participants',
      iconNum: 5,
    },
  ];

  const companies = [
    { name: 'Google', alt: 'Google logo' },
    { name: 'Microsoft', alt: 'Microsoft logo' },
    { name: 'Amazon', alt: 'Amazon logo' },
    { name: 'McKinsey', alt: 'McKinsey logo' },
    { name: 'Apple', alt: 'Apple logo' },
  ];

  return (
    <section id="benefits" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-[#042556] mb-4">
            What's in it for You?
          </h2>
          <p className="text-lg text-gray-600">
            Explore the range of exciting opportunities and rewards you stand to gain.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:scale-[1.03] text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#042556] to-[#354FAE] text-white font-bold rounded-full flex items-center justify-center text-xl">
                {benefit.iconNum}
              </div>
              <h3 className="text-lg font-semibold text-[#042556] mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Participating Companies */}
        <div className="mt-15">
          <Partnerlogo type="companies" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
