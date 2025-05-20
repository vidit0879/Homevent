import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-[#f8fafc] text-[#1e40af]">
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            data-aos="fade-down"
          >
            Need Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
            {/* Office Location */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Office Location</h4>
              <p className="text-blue-700/90">
                IMI Ahmedabad Ventures<br />India
              </p>
            </div>
            
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Email Us</h4>
              <a
                href="mailto:contact@prepsom.com"
                className="text-blue-700/90 hover:text-blue-600 transition-colors"
              >
                contact@prepsom.com
              </a>
            </div>
            
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Call Us</h4>
              <p className="text-blue-700/90">
                +91 8758 0761 06
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="border-t border-blue-100 py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-800/80 text-sm text-center md:text-left">
              © 2025 <span className="font-bold text-blue-800">PrepSOM</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.linkedin.com/company/prepsom-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800/70 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@prepsom.Interview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800/70 hover:text-blue-600 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/prepsom_labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800/70 hover:text-blue-600 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;