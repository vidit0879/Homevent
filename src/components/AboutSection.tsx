import React from "react";
import { Activity, ChartBar, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <div id="about">
      {/* Gradient Hero Section */}
      <section
        className="relative bg-gradient-to-r from-[#5d7295] to-[#354FAE] py-20 text-white overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[url('/path-to-pattern.svg')] opacity-10 bg-cover bg-center pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            What is <span className="text-blue-300">Prep Summit 2025</span>?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Prep Summit is a multi-stage competition designed for final-year students to bridge the gap between academia and industry.
            Participate in aptitude rounds, case studies, and mock interviews to showcase your skills to top recruiters and unlock your professional future.
          </p>
        </div>
      </section>


      {/* Features Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-3 text-center">
          {/* Card 1 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.03] border-t-4 border-blue-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-teal-100 rounded-full p-4 w-fit mx-auto mb-4">
              <Activity className="w-10 h-10 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Aptitude Rounds</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Test your analytical and problem-solving skills
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.03] border-t-4 border-blue-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-4">
              <ChartBar className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Case Studies</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Apply your knowledge to real-world business scenarios
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.03] border-t-4 border-blue-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-4">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Mock Interviews</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Prepare for job interviews with industry experts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
