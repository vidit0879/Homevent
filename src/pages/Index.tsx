
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EligibilitySection from '@/components/EligibilitySection';
import CareerSection from '@/components/CareerSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowToJoinSection from '@/components/HowToJoinSection';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once on scroll
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EligibilitySection />
      <CareerSection />
      <BenefitsSection />
      <HowToJoinSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
