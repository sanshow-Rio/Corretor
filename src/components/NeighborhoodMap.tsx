/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Car, 
  Navigation, 
  Map as MapIcon, 
  Hospital, 
  GraduationCap, 
  ShoppingBag, 
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import { MAP_MARKERS } from '../data';
import { MapMarker } from '../types';

export default function NeighborhoodMap() {
  const [activeMarkerId, setActiveMarkerId] = useState<string>('prezunic');

  const activeMarker = MAP_MARKERS.find(m => m.id === activeMarkerId) || MAP_MARKERS[0];

  const getMarkerIcon = (type: string, id: string) => {
    const isSelected = id === activeMarkerId;
    const baseClass = `p-2 rounded-none transition-transform ${
      isSelected ? 'scale-110 shadow-md text-white' : 'text-stone-450 text-stone-600 bg-stone-100 border border-stone-200'
    }`;
    
    let iconBg = 'bg-stone-100';
    if (isSelected) {
      if (id === 'your_store') return `${baseClass} bg-brand-red border-2 border-black`;
      if (type === 'comercio') iconBg = 'bg-emerald-500 border-2 border-black';
      if (type === 'saude') iconBg = 'bg-brand-red border-2 border-black';
      if (type === 'educacao') iconBg = 'bg-blue-500 border-2 border-black';
      if (type === 'transporte') iconBg = 'bg-sky-500 border-2 border-black';
    }

    switch (type) {
      case 'saude':
        return <div className={`${baseClass} ${iconBg}`}><Hospital size={16} /></div>;
      case 'educacao':
        return <div className={`${baseClass} ${iconBg}`}><GraduationCap size={16} /></div>;
      case 'comercio':
        return <div className={`${baseClass} ${iconBg}`}><ShoppingBag size={16} /></div>;
      default:
        return <div className={`${baseClass} ${iconBg}`}><Navigation size={16} /></div>;
    }
  };

  return (
    <div id="neighborhood-loc-widget" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* List & Details sidebar (5 columns) */}
      <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
        <div>
          <span className="text-brand-red font-display text-xs uppercase tracking-[0.2em] font-black block mb-1">Localização Comercial</span>
          <h3 className="font-display font-black text-3xl uppercase tracking-tighter text-brand-dark">O Coração Pulsante de Vila Isabel</h3>
          <p className="text-stone-600 font-sans text-sm mt-2 leading-relaxed">
            Uma localização incomparável. Situada na <strong className="text-brand-dark font-black">Rua Boulevard 28 de Setembro</strong>, a loja fica em um ponto de alto tráfego espontâneo e excelentes conexões. Clique nos polos de interesse abaixo para saber mais.
          </p>
        </div>

        {/* Dynamic Point List Selector */}
        <div className="flex flex-col gap-3">
          {MAP_MARKERS.map((m) => {
            const isSelected = m.id === activeMarkerId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMarkerId(m.id)}
                className={`flex items-center justify-between text-left px-4 py-3.5 border-2 transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-red border-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-white border-black text-stone-900 hover:bg-stone-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`shrink-0 ${isSelected ? 'text-white' : 'text-stone-500'}`}>
                    <MapPin size={16} className={isSelected ? 'animate-bounce' : ''} />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-xs md:text-sm block uppercase tracking-tight">{m.name}</span>
                    <span className={`text-[10px] font-mono block leading-tight ${isSelected ? 'text-stone-100' : 'text-stone-400'}`}>
                      {m.distance}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] font-display font-black px-2 py-0.5 border border-black uppercase tracking-wider ${
                    isSelected 
                      ? 'bg-white text-stone-950' 
                      : 'bg-stone-100 text-stone-700'
                  }`}>
                    {m.trafficLevel} fluxo
                  </span>
                  <ArrowRight size={13} className={`transition-transform ${isSelected ? 'translate-x-0.5 text-white' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Details Panel */}
        <div className="bg-white p-4 md:p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-brand-dark">
          <span className="text-[10px] font-display font-black uppercase tracking-[0.15em] text-brand-red block mb-1">Destaque do Polo Selecionado</span>
          <h4 className="font-display font-black uppercase text-base text-brand-dark mb-1">{activeMarker.name}</h4>
          <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">{activeMarker.description}</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-stone-500 font-bold">
              <Compass size={13} className="text-brand-red" />
              <span>Distância real: <strong className="text-stone-900 font-black">{activeMarker.distance}</strong></span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Styled vector map (7 columns) */}
      <div className="lg:col-span-7 bg-stone-900 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative overflow-hidden h-[420px] md:h-auto min-h-[400px]">
        {/* Decorative Grid overlay to represent streets and precision */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Upper HUD Header */}
        <div className="flex justify-between items-center z-15 text-white/90">
          <div className="flex items-center gap-2">
            <div className="bg-stone-950 p-1.5 border border-stone-800">
              <MapIcon size={14} className="text-brand-red" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest block leading-none">Radar de Fluxo</span>
              <span className="text-xs font-display font-black text-white block uppercase">Vila Isabel</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-stone-450 text-stone-400">
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Comércio</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-red"></span> Saúde</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500"></span> Educação</span>
          </div>
        </div>

        {/* Simulated Map Container with SVG styled road layouts */}
        <div className="flex-1 w-full relative flex items-center justify-center my-4 overflow-hidden border-2 border-black bg-stone-950">
          
          {/* Vector Streets Drawing inside map */}
          <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            {/* Avenida Boulevard 28 de Setembro (Horizontal Main Road) */}
            <line x1="0" y1="200" x2="1000" y2="200" stroke="#4b5563" strokeWidth="24" strokeLinecap="round" />
            <line x1="0" y1="200" x2="1000" y2="200" stroke="#e63946" strokeWidth="1" strokeDasharray="6 6" />

            {/* Rua São Francisco Xavier / Rua Teodoro da Silva connectors */}
            <line x1="120" y1="0" x2="120" y2="500" stroke="#374151" strokeWidth="14" strokeLinecap="round" />
            <line x1="380" y1="0" x2="380" y2="500" stroke="#374151" strokeWidth="16" strokeLinecap="round" />
            <line x1="680" y1="0" x2="680" y2="500" stroke="#374151" strokeWidth="14" strokeLinecap="round" />
            
            {/* Secondary connections */}
            <line x1="0" y1="340" x2="1000" y2="340" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
            
            {/* Simulated river / greenery edge decor */}
            <path d="M-20,400 Q150,450 300,420 T700,430 T1050,410" fill="none" stroke="#e63946" strokeWidth="12" className="opacity-10" />
          </svg>

          {/* Map Vector Targets & Interactive Anchors */}
          
          {/* 1. RETAIL LOJA DE FRENTE (YOU ARE HERE) - Absolute Center of attention */}
          <div className="absolute left-[38%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="absolute -inset-4 rounded-none bg-brand-red/25 animate-ping duration-1000 shrink-0" />
            <div className="bg-brand-red text-white p-2.5 rounded-none border-2 border-black shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
              <MapPin size={20} className="fill-white animate-bounce" />
            </div>
            <div className="mt-1.5 bg-brand-red border border-black text-[9px] text-white px-2 py-0.5 rounded-none font-sans font-black whitespace-nowrap shadow-md">
              SUA LOJA AQUI
            </div>
          </div>

          {/* 2. Prezunic (Across the street) */}
          <div className="absolute left-[38%] top-[18%] -translate-x-1/2 -translate-y-1/2 z-19 flex flex-col items-center flex-col shrink-0">
            <button 
              onClick={() => setActiveMarkerId('prezunic')}
              className={`transition-all duration-300 flex flex-col items-center shrink-0 cursor-pointer ${activeMarkerId === 'prezunic' ? 'scale-115' : 'hover:scale-105'}`}
            >
              {getMarkerIcon('comercio', 'prezunic')}
              <div className="mt-1 bg-stone-900 text-[9px] text-white px-1.5 py-0.5 border border-black font-bold whitespace-nowrap">
                Prezunic Supermercado
              </div>
            </button>
          </div>

          {/* 3. UERJ (Northeast) */}
          <div className="absolute left-[72%] top-[15%] -translate-x-1/2 -translate-y-1/2 z-19 flex flex-col items-center flex-col shrink-0">
            <button 
              onClick={() => setActiveMarkerId('uerj')}
              className={`transition-all duration-300 flex flex-col items-center shrink-0 cursor-pointer ${activeMarkerId === 'uerj' ? 'scale-115' : 'hover:scale-105'}`}
            >
              {getMarkerIcon('educacao', 'uerj')}
              <div className="mt-1 bg-stone-900 text-[9px] text-white px-1.5 py-0.5 border border-black font-bold whitespace-nowrap">
                UERJ Campus
              </div>
            </button>
          </div>

          {/* 4. Pedro Ernesto Hospital (East) */}
          <div className="absolute left-[80%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-19 flex flex-col items-center flex-col shrink-0">
            <button 
              onClick={() => setActiveMarkerId('hupe')}
              className={`transition-all duration-300 flex flex-col items-center shrink-0 cursor-pointer ${activeMarkerId === 'hupe' ? 'scale-115' : 'hover:scale-105'}`}
            >
              {getMarkerIcon('saude', 'hupe')}
              <div className="mt-1 bg-stone-900 text-[9px] text-white px-1.5 py-0.5 border border-black font-bold whitespace-nowrap">
                Hospital Pedro Ernesto
              </div>
            </button>
          </div>

          {/* 5. Boulevard 28 de Setembro main stream */}
          <div className="absolute left-[15%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-19 flex flex-col items-center flex-col shrink-0">
            <button 
              onClick={() => setActiveMarkerId('boulevard28')}
              className={`transition-all duration-300 flex flex-col items-center shrink-0 cursor-pointer ${activeMarkerId === 'boulevard28' ? 'scale-115' : 'hover:scale-105'}`}
            >
              {getMarkerIcon('transporte', 'boulevard28')}
              <div className="mt-1 bg-stone-900 text-[9px] text-white px-1.5 py-0.5 border border-black font-bold whitespace-nowrap">
                Av. 28 de Setembro
              </div>
            </button>
          </div>

          {/* 6. Shopping Boulevard (West) */}
          <div className="absolute left-[12%] top-[72%] -translate-x-1/2 -translate-y-1/2 z-19 flex flex-col items-center flex-col shrink-0">
            <button 
              onClick={() => setActiveMarkerId('shopping')}
              className={`transition-all duration-300 flex flex-col items-center shrink-0 cursor-pointer ${activeMarkerId === 'shopping' ? 'scale-115' : 'hover:scale-105'}`}
            >
              {getMarkerIcon('comercio', 'shopping')}
              <div className="mt-1 bg-stone-900 text-[9px] text-white px-1.5 py-0.5 border border-black font-bold whitespace-nowrap">
                Shopping Boulevard
              </div>
            </button>
          </div>

          {/* 7. Maracana (South-East) */}
          <div className="absolute left-[65%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-19 flex flex-col items-center flex-col shrink-0">
            <button 
              onClick={() => setActiveMarkerId('maracana')}
              className={`transition-all duration-300 flex flex-col items-center shrink-0 cursor-pointer ${activeMarkerId === 'maracana' ? 'scale-115' : 'hover:scale-105'}`}
            >
              {getMarkerIcon('transporte', 'maracana')}
              <div className="mt-1 bg-stone-900 text-[9px] text-white px-1.5 py-0.5 border border-black font-bold whitespace-nowrap">
                Estação Maracanã
              </div>
            </button>
          </div>

          {/* Floating Flow Overlay indicators */}
          <div className="absolute bottom-2 left-3 bg-stone-950 border-2 border-black text-emerald-400 font-mono text-[9px] py-1 px-2.5 flex items-center gap-1.5 backdrop-blur-sm z-30">
            <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
            <span>Zona Comercial Verde: Fluxo Pedestre Intenso</span>
          </div>

        </div>

        {/* Connectivity info ribbon */}
        <div className="z-10 bg-stone-900 p-3.5 border-2 border-black flex flex-col sm:flex-row gap-3 items-center justify-between text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-2">
            <Car size={14} className="text-brand-red shrink-0" />
            <span>Acesso rápido / Conexões viárias desimpedidas:</span>
          </div>
          <div className="flex flex-wrap gap-3 text-white font-bold">
            <span>→ Maracanã (<strong className="text-brand-red">5 min</strong>)</span>
            <span>→ Tijuca (<strong className="text-brand-red">8 min</strong>)</span>
            <span>→ Centro (<strong className="text-brand-red">12 min</strong>)</span>
          </div>
        </div>

      </div>

    </div>
  );
}
