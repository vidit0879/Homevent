import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';    
import 'aos/dist/aos.css';
import h1Img from '/h1Img.png';
import h2Img from '/h2Img.png';
import h3Img from '/h3Img.png';
import h4Img from '/h4Img.png';
import h5Img from '/h5Img.png';



const heroSlides = [
  {
    heading: "Student Onboarding",
    image: h1Img,
    alt: "Student Onboarding",
    subtext: "Our Student management tool helps colleges and individual students manage their profile keeping all relevant documents in one place and managing their candidature.",
  },
  {
    heading: "Skill Evaluation and Honing",
    image: h2Img,
    alt: "Skill Evaluation and Honing",
    subtext: "We use Aptitude tests and mock interview of the candidates to understand the profile of the candidates better. This also gives candidates feedback of where they really stand.",
  },
  {
    heading: "Expectation Matching",
    image: h3Img,
    alt: "Expectation Matching",
    subtext: "Using our AI Engine matches the candidates based on their skills. The tool helps candidate understand the job better and hence reducing potential churn.",
  },
  {
    heading: "Candidate Assessment",
    image: h4Img,
    alt: "Candidate Assessment",
    subtext: "The corporate can conduct their first level of screening based on their own criteria. Tool will help reduce subjectivity and make hiring faster.",
  },
  {
    heading: "Candidate Selection",
    image: h5Img,
    alt: "Candidate Selection",
    subtext: "Voice/video-based mock interview powered by conversational AI. Evaluates communication, content, confidence, and clarity.",
  },
];

const HeroSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once on scroll
    });
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);


  const slide = heroSlides[currentSlide];
  return (
    <section className="flex flex-col lg:flex-row items-center min-h-screen px-4 md:px-16 py-11 lg:py-0 bg-gradient-to-br from-white via-[#ecf3ff] to-[#dbeafe] relative overflow-hidden">
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left min-h-screen"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#042454] leading-tight">
          Prep Summit 2025
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2563eb]">
          Campus se Corporate tak
        </h2>
        <p className="text-[#042454] text-lg md:text-xl mb-8 max-w-xl">
          Your Gateway from Campus to Corporate. Learn with real interview questions, aptitude tests, and expert feedback.
        </p>
        <Button
          onClick={scrollToForm}
          className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-semibold text-lg shadow transition"
        >
          Register Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mt-0 lg:mt-0 transition-all duration-150"  data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000">
            <div className="text-2xl font-semibold text-[#354FAE] mb-4 text-center">
              {slide.heading}
            </div>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full max-w-xl object-contain rounded-xl shadow-lg"
            />
            <div className="mt-6 text-center relative w-full max-w-xl">
              <div className="text-xl font-medium text-[#354FAE] mt-2">
                <span className="block">↓</span>
                {slide.subtext}
              </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
