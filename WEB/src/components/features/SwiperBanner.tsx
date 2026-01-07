import { useState, type SetStateAction } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Banner1 from "../../assets/banner/banner1.webp"
import Banner2 from "../../assets/banner/banner2.webp"
import Banner3 from "../../assets/banner/banner3.webp"
import Banner4 from "../../assets/banner/banner4.webp"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SwiperBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Diseñamos espacios que hablan por ti",
      subtitle: "Transforma tu visión en una obra arquitectónica que refleja tu identidad y estilo de vida.",
      image: Banner1,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Construimos ideas, habitamos sueños",
      subtitle: "Más que planos y paredes, entregamos lugares donde tus sueños toman forma.",
      image: Banner2, // Sin imagen, usará background
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Tu proyecto merece más que un diseño: merece alma",
      subtitle: "Creamos espacios únicos, con personalidad, que trascienden el tiempo.",
      image: Banner3,
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Imaginamos contigo, construimos para ti",
      subtitle: "Te acompañamos desde la primera idea hasta el último detalle, porque tu proyecto también es nuestro.",
      image: Banner4, // Sin imagen, usará background
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="inicio">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                ? 'opacity-100 scale-100 z-30'
                : 'opacity-0 scale-110'
              }`}
            style={slide.image ? {} : { background: slide.background }}
          >
            {/* Background Image */}
            {slide.image && (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            )}
            {/* Content */}
            <div className="flex items-center justify-center h-full relative z-10">
              <div className="text-center text-white px-8 max-w-4xl">
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold text-red-200 mb-6 transition-all duration-1200 delay-300 ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                    }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-xl md:text-xl font-light opacity-90 transition-all duration-1200 delay-500 ${index === currentSlide
                      ? 'opacity-90 translate-y-0'
                      : 'opacity-0 translate-y-8'
                    }`}
                >
                  {slide.subtitle}
                </p>

                <nav className={`flex justify-center gap-4 mt-6 transition-all duration-1200 delay-500 ${index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}>
                  <a href="#" className="hover:text-secondary duration-300 transition-all">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="hover:text-secondary duration-300 transition-all">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="hover:text-secondary duration-300 transition-all">
                    <FaTiktok size={20} />
                  </a>
                </nav>

                <div
                  className={`mt-6 transition-all duration-1200 delay-700 ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                    }`}
                >
                  <div className="w-24 h-0.5 bg-white/50 mx-auto"></div>
                </div>
              </div>
            </div>

            {/* Geometric decoration */}
            <div className="absolute top-10 right-3 md:right-5 lg:right-10 z-10">
              <div
                className={`w-32 h-32 border border-white/20 rotate-45 transition-all duration-1500 delay-200 ${index === currentSlide
                    ? 'opacity-100 scale-100 rotate-45'
                    : 'opacity-0 scale-50 rotate-0'
                  }`}
              ></div>
            </div>

            <div className="absolute bottom-10 left-10 z-10">
              <div
                className={`w-24 h-24 rounded-full border border-white/20 transition-all duration-1500 delay-400 ${index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-50'
                  }`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-5 lg:left-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-secondary transition-all duration-300 hover:scale-110 z-30"
      >
        <GrFormPrevious size={40} />
        {/*
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        */}
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-5 lg:right-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-secondary transition-all duration-300 hover:scale-110 z-30"
      >
        <GrFormNext size={40} />
        {/*
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg> 
        */}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play functionality */}
      <div className="absolute top-8 left-8 z-10">
        <div className="text-white/60 text-sm font-light">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}