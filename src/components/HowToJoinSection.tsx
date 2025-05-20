import React from 'react';
import { Check, GraduationCap, Hourglass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowToJoinSection = () => {
  const steps = [
    {
      title: 'Register Now',
      description: 'Fill out the registration form below.',
      icon: <Check className="h-6 w-6 text-white" />,
    },
    {
      title: 'Confirm Eligibility',
      description: "Verify you're a final-year student in a listed stream.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
    },
    {
      title: 'Wait for Event Dates',
      description: 'Stay tuned for announcements - Coming Soon!',
      icon: <Hourglass className="h-6 w-6 text-white" />,
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="join" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            How to Join
          </h2>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 text-lg px-8 py-3 rounded-full shadow-lg transition-all"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToJoinSection;
