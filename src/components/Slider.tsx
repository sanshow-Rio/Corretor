/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Calendar, PlusCircle } from 'lucide-react';
import { SLIDES_DATA } from '../data';

interface SliderProps {
  onScheduleClick: () => void;
}

export default function Slider({ onScheduleClick }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  const currentSlide = SLIDES_DATA[currentIndex];

  return (
    <div id="slideshow-container" className="relative group bg-stone-900 border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Upper Status Ribbon resembling the WhatsApp call icon & phone header from photo */}
      <div id="slider-whatsapp-ribbon" className="absolute top-0 inset-x-0 z-40 bg-brand-red text-white font-black uppercase tracking-wider py-3 px-6 flex justify-between items-center text-xs md:text-sm border-b-2 border-black shadow-md">
        <div className="flex items-center gap-2">
          <span className="animate-pulse flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          <span>Destaque Exclusivo em Vila Isabel</span>
        </div>
        <a 
          href="https://wa.me/5521990418350?text=Olá!%20Tenho%20interesse%20em%20alugar%20a%20loja%20de%20frente%20em%20Vila%20Isabel.%20Gostaria%20de%20mais%20informações."
          target="_blank"
          rel="noopener noreferrer" 
          id="whatsapp-call-link"
          className="flex items-center gap-2 hover:bg-stone-900 transition-all px-3 py-1 bg-white text-stone-950 border-2 border-black font-black uppercase text-[10px] tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none"
        >
          <span className="font-mono text-xs md:text-sm font-black">(21) 99041-8350</span>
          <span className="text-[10px] hidden sm:inline-block leading-none uppercase bg-emerald-500 text-white px-1.5 py-1 rounded ml-1 font-black">WhatsApp</span>
        </a>
      </div>

      {/* Main Slide Stage */}
      <div id="main-slide-stage" className="relative h-[480px] md:h-[600px] w-full flex items-center justify-center overflow-hidden pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image Layer with elegant dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-950/40 z-10" />
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out"
            />

            {/* Content Overlays exactly inspired by the screenshot banner styles */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-6 md:p-12 flex flex-col items-start text-white">
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {currentSlide.badge && (
                  <span className="bg-brand-red text-white font-display font-black text-[10px] md:text-xs px-3.5 py-1.5 border border-black uppercase tracking-wider shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {currentSlide.badge}
                  </span>
                )}
                <span className="bg-white text-stone-950 font-mono text-[10px] md:text-xs px-2.5 py-1.5 border border-black uppercase font-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  {currentSlide.tag}
                </span>
                {currentSlide.price && (
                  <span className="bg-emerald-500 font-mono text-[10px] md:text-xs text-white px-3 py-1.5 border border-black font-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {currentSlide.price}
                  </span>
                )}
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-white mb-2 max-w-2xl leading-none text-shadow-md"
              >
                {currentSlide.title}
              </motion.h2>

              {currentSlide.subtitle && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-brand-red font-display uppercase tracking-widest font-black text-xs md:text-base mb-4 max-w-xl"
                >
                  {currentSlide.subtitle}
                </motion.p>
              )}

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 font-sans text-xs md:text-base leading-relaxed mb-6 max-w-xl"
              >
                {currentSlide.description}
              </motion.p>

              {/* Tag Pills */}
              {currentSlide.tags && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {currentSlide.tags.map((tg, idx) => (
                    <span 
                      key={idx} 
                      className="bg-black/80 text-white text-[10px] px-3 py-1.5 border border-stone-800 font-mono uppercase font-bold"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              )}

              {/* Interaction Call in Banner */}
              {currentIndex === 5 ? (
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/5521990418350?text=Olá!%20Fiquei%20muito%20interessado%2520em%2520alugar%252520a%252520loja%252520de%252520frente%252520em%252520Vila%252520Isabel.%20Gostaria%252520de%252520agendar%252520uma%252520visita."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-all text-white font-black uppercase text-xs tracking-wider px-8 py-3.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none group/btn cursor-pointer"
                  >
                    <span>Fale no WhatsApp</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                  <button
                    onClick={onScheduleClick}
                    className="flex justify-center items-center gap-2 bg-stone-850 bg-stone-800 hover:bg-stone-700 transition-all text-white font-black uppercase text-xs tracking-wider px-6 py-3.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
                  >
                    <Calendar size={16} />
                    <span>Agendar Visita</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setCurrentIndex(5)}
                  className="flex justify-center items-center gap-2 bg-[#E63946] hover:bg-red-700 transition-all text-white font-black uppercase text-xs tracking-wider px-6 py-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none cursor-pointer"
                >
                  <span>Ver Contato & Contratar</span>
                  <PlusCircle size={14} />
                </button>
              )}

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation / Control Overlays */}
      <button 
        onClick={handlePrev} 
        id="slider-nav-prev"
        className="absolute left-4 top-[55%] -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white rounded-none p-3.5 border border-black hover:scale-105 pointer-events-auto transition-transform"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        onClick={handleNext} 
        id="slider-nav-next"
        className="absolute right-4 top-[55%] -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white rounded-none p-3.5 border border-black hover:scale-105 pointer-events-auto transition-transform"
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button>

      {/* Control Bar (Play-Pause & Mini Indicator Bullets) */}
      <div id="slider-metadata-footer" className="absolute bottom-4 right-6 z-30 flex items-center gap-4 bg-stone-950 py-2 px-4 rounded-none border-2 border-black shadow-md">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-gray-300 hover:text-brand-red transition-colors"
          title={isPlaying ? "Pausar Apresentação" : "Iniciar Apresentação"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <div className="flex gap-1.5">
          {SLIDES_DATA.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-brand-red border border-black' : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'
              }`}
              title={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
