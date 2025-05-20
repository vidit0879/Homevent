import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import c1 from "/c1.png";
import c2 from "/c2.png";
import c3 from "/c3.png";
import c4 from "/c4.png";


// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PartnerLogoProps {
    type: 'supporters' | 'companies';
}

const PartnerLogo = ({ type }: PartnerLogoProps) => {
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    let partnerLogos = [];
    if (type === 'companies') {
        partnerLogos = [
            { id: 1, src: c1, alt: "Company 1" },
            { id: 2, src: c2, alt: "Company 2" },
            { id: 3, src: c3, alt: "Company 3" },
            { id: 4, src: c4, alt: "Company 4" },
        ];
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div
            className="py-8 sm:py-10 bg-[#F7F8FC] relative mb-2 border border-gray-200 shadow-md rounded-xl"
            data-aos="fade-up"
        >
            <div className="text-center mb-6 sm:mb-8" data-aos="fade-down">
                <h2 className="font-semibold text-2xl sm:text-3xl md:text-3xl text-[#0549B8]">
                    {type === 'supporters'
                        ? 'Our Supporters and Early Adopters'
                        : 'Get Direct Access to 1000+ Interview Questions from Top Companies'}
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6" data-aos="zoom-in">
                <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <Slider ref={sliderRef} {...settings}>
                    {partnerLogos.map((partner) => (
                        <div key={partner.id} className="px-2">
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain mx-auto transition-all duration-300"
                                    data-aos="flip-left"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default PartnerLogo;