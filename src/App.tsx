/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Building, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Eye, 
  CornerDownRight, 
  ExternalLink,
  Lock,
  Layers,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import Slider from './components/Slider';
import FinanceCalculator from './components/FinanceCalculator';
import NeighborhoodMap from './components/NeighborhoodMap';
import ContactForm from './components/ContactForm';

export default function App() {
  const [successToast, setSuccessToast] = useState(false);
  
  // Element scroll refs for elegant anchor navigations
  const slidesRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  const scrollToView = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const notifyFormSuccess = () => {
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 5000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-brand-red selection:text-white pb-16">
      
      {/* Upper informational micro-ticker */}
      <div id="top-ticker" className="bg-stone-900 text-stone-300 py-3 px-4 text-center text-xs border-b-4 border-black flex justify-center items-center gap-4 flex-wrap font-mono uppercase tracking-wide">
        <span>📍 Ponto Disponível: Rua Boulevard 28 de Setembro, Vila Isabel, RJ</span>
        <span className="hidden md:inline-block text-stone-700">|</span>
        <span className="text-brand-red font-black font-sans bg-white border border-black px-2 py-0.5 shadow-[1px_1px_0px_rgba(0,0,0,1)]">Sem fiador, sem depósito e sem taxas abusivas de imobiliária!</span>
      </div>

      {/* Main Navbar */}
      <header id="app-header" className="sticky top-0 z-50 bg-white border-b-4 border-black transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Layout */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-red text-white p-2.5 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Building size={22} className="text-white" />
            </div>
            <div>
              <span className="font-display font-black text-lg md:text-xl tracking-tight uppercase text-stone-900 block leading-none">
                Loja Vila Isabel
              </span>
              <span className="text-[10px] font-mono text-zinc-650 text-zinc-600 uppercase tracking-[0.15em] block mt-1">
                Ponto de Frente • 15 m²
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-display font-bold uppercase tracking-wider text-stone-900">
            <button 
              onClick={() => scrollToView(slidesRef)} 
              className="hover:text-brand-red transition-colors cursor-pointer"
            >
              Galeria de Fotos
            </button>
            <button 
              onClick={() => scrollToView(calculatorRef)} 
              className="hover:text-brand-red transition-colors cursor-pointer"
            >
              Simulador Comercial
            </button>
            <button 
              onClick={() => scrollToView(mapRef)} 
              className="hover:text-brand-red transition-colors cursor-pointer"
            >
              Localização & Fluxo
            </button>
            <button 
              onClick={() => scrollToView(scheduleRef)} 
              className="hover:text-brand-red transition-colors cursor-pointer"
            >
              Agendar Visita
            </button>
          </nav>

          {/* Contact Fast CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5521990418350?text=Olá!%20Fiquei%20interessado%20no%20aluguel%20da%20loja%20de%20frente%20em%20Vila%20Isabel.%20Poderia%20me%20enviar%20mais%20informações?"
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-whatsapp"
              className="bg-[#25D366] hover:bg-[#128C7E] border-2 border-black text-stone-950 hover:text-white px-5 py-2.5 text-xs font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center gap-2 cursor-pointer group uppercase tracking-wider"
            >
              <Phone size={14} fill="currentColor" />
              <span className="hidden sm:inline font-mono">(21) 99041-8350</span>
              <span className="inline sm:hidden font-sans">Locação</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section id="hero-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column (Creative ad hooks & highlight bullets) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-brand-red text-white border-2 border-black text-[10px] md:text-xs font-black px-3.5 py-2 uppercase tracking-[0.1em] self-start shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <Sparkles size={11} className="text-white animate-pulse" />
            <span>Sua Marca na Melhor Vitrine de Vila Isabel</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-[0.98] text-stone-900">
              Pronto para ver seu negócio <span className="text-brand-red border-b-4 border-black font-sans font-black tracking-normal">crescer</span>?
            </h1>
            <p className="text-stone-700 font-sans text-sm md:text-base mt-2 leading-relaxed font-medium">
              Esta maravilhosa loja de frente para a rua oferece a visibilidade impecável e o faturamento constante que você merece, com a total liberdade operacional que o seu negócio exige.
            </p>
          </div>

          {/* Quick Metrics display */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white p-3 md:p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center text-stone-950">
              <span className="text-[10px] font-display font-bold text-stone-400 uppercase tracking-wider block">Área</span>
              <span className="font-mono text-xl md:text-2xl font-black text-stone-900 block mt-0.5">15 m²</span>
            </div>
            <div className="bg-white p-3 md:p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center text-stone-950">
              <span className="text-[10px] font-display font-bold text-stone-400 uppercase tracking-wider block">Posição</span>
              <span className="font-mono text-xl md:text-2xl font-black text-stone-900 block mt-0.5">Frente</span>
            </div>
            <div className="bg-white p-3 md:p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center text-stone-950">
              <span className="text-[10px] font-display font-bold text-stone-400 uppercase tracking-wider block">Facilitado</span>
              <span className="font-display text-xs md:text-sm font-black text-emerald-600 block mt-2 uppercase leading-none bg-emerald-50 py-1 border border-black">Sem Fiador</span>
            </div>
          </div>

          {/* Highlight features extracted from advertisement */}
          <div className="bg-stone-900 text-white p-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(230,57,70,1)] relative overflow-hidden group">
            {/* Absolute badge right top */}
            <div className="absolute top-4 right-4 bg-brand-red text-white text-[10px] md:text-xs font-mono font-black py-1.5 px-4 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase">
              R$ 4.200/mês
            </div>

            <span className="text-[10px] font-mono text-brand-red font-black uppercase tracking-wider block mb-1">Garantias & Facilidades</span>
            <h4 className="font-display font-black uppercase text-lg mb-2 text-white">Alugue sem burocracia</h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans mb-4">
              Sabemos o quão cansativo é negociar com imobiliárias. Por isso, oferecemos um processo simples e acelerado: <strong className="text-emerald-400 font-bold">pagou, levou as chaves!</strong>
            </p>

            <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-stone-850">
              <span className="flex items-center gap-1 text-[10.5px] font-sans text-stone-200">
                <CheckCircle2 size={12} className="text-brand-red" />
                <span>Sem fiador</span>
              </span>
              <span className="flex items-center gap-1 text-[10.5px] font-sans text-stone-200">
                <CheckCircle2 size={12} className="text-brand-red" />
                <span>Sem depósito</span>
              </span>
              <span className="flex items-center gap-1 text-[10.5px] font-sans text-stone-200">
                <CheckCircle2 size={12} className="text-brand-red" />
                <span>Entrada imediata</span>
              </span>
            </div>
          </div>

        </div>

        {/* Right Column (The immersive screenshot banner slider) */}
        <div ref={slidesRef} className="lg:col-span-7">
          <Slider onScheduleClick={() => scrollToView(scheduleRef)} />
        </div>

      </section>

      {/* Main Bullet Points Grid "Por que este é o ponto ideal?" */}
      <section id="key-advantages" className="bg-white py-16 mt-16 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-red font-display text-xs uppercase tracking-[0.2em] font-black block mb-1">Destaques Estruturais</span>
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-brand-dark leading-none">
              Por que este é o ponto comercial perfeito?
            </h2>
            <p className="text-stone-500 font-sans text-sm md:text-base mt-2">
              Analisamos as vantagens inerentes deste ponto na Rua Boulevard 28 de Setembro, desenhadas para alavancar seu comércio desde o primeiro dia.
            </p>
          </div>

          {/* Cards bento-like grid representing the original text bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Visibilidade Máxima */}
            <div className="bg-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between text-stone-950">
              <div>
                <div className="bg-sky-50 text-sky-600 border border-black p-3 inline-block mb-4">
                  <Eye size={20} />
                </div>
                <h3 className="font-display font-black uppercase text-base text-stone-900 mb-2">Visibilidade Máxima</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Loja de frente para a calçada e com excelente exposição comercial. Sua vitrine fica exposta diretamente ao olhar de milhares de pedestres.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center gap-1.5 text-[10.5px] font-mono text-sky-600 font-semibold">
                <CornerDownRight size={12} />
                <span>Excelente exposição comercial</span>
              </div>
            </div>

            {/* 2. Mais Liberdade */}
            <div className="bg-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(230,57,70,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(230,57,70,1)] transition-all flex flex-col justify-between text-stone-950">
              <div>
                <div className="bg-rose-50 text-brand-red border border-black p-3 inline-block mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-display font-black uppercase text-base text-stone-900 mb-2">Mais Liberdade</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Flexibilidade total de horário de funcionamento para o seu negócio. Opere sem as amarras e restrições de shoppings ou centros empresariais fechados.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center gap-1.5 text-[10.5px] font-mono text-brand-red font-semibold">
                <CornerDownRight size={12} />
                <span>Horários de funcionamento livres</span>
              </div>
            </div>

            {/* 3. Fluxo Constante */}
            <div className="bg-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(16,185,129,1)] transition-all flex flex-col justify-between text-stone-950">
              <div>
                <div className="bg-emerald-50 text-emerald-600 border border-black p-3 inline-block mb-4">
                  <TrendingUp size={20} />
                </div>
                <h3 className="font-display font-black uppercase text-base text-stone-900 mb-2">Fluxo Constante</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Excelente circulação espontânea de pedestres, forte comércio local circundante e fluxo veicular ininterrupto.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center gap-1.5 text-[10.5px] font-mono text-emerald-600 font-semibold">
                <CornerDownRight size={12} />
                <span>Em frente ao Prezunic Vila Isabel</span>
              </div>
            </div>

            {/* 4. Versatilidade */}
            <div className="bg-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(14,165,233,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(14,165,233,1)] transition-all flex flex-col justify-between text-stone-950">
              <div>
                <div className="bg-sky-50 text-sky-600 border border-black p-3 inline-block mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="font-display font-black uppercase text-base text-stone-900 mb-2">Versatilidade Total</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Piso de porcelanato elegante de fácil higienização, frentes em vidro e infraestrutura pronta para abrigar múltiplas atividades econômicas.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section ref={calculatorRef} id="calculator-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-8">
          <span className="text-brand-red font-display text-xs uppercase tracking-[0.2em] font-black block mb-1">Estudo de Rentabilidade</span>
          <h2 className="font-display font-black text-3xl uppercase tracking-tighter text-brand-dark leading-none">
            Seu negócio cabe nos 15 m²?
          </h2>
          <p className="text-stone-500 font-sans text-sm mt-1">
            Utilize nosso simulador de faturamento e margem líquida para entender de forma realista por que o aluguel de R$ 4.200/mês se justifica rapidamente graças à circulação natural de clientes.
          </p>
        </div>
        <FinanceCalculator />
      </section>

      {/* Neighborhood Map Section */}
      <section ref={mapRef} id="map-section" className="bg-stone-100 py-16 border-y-4 border-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NeighborhoodMap />
        </div>
      </section>

      {/* Booking Form Layout */}
      <section ref={scheduleRef} id="booking-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <span className="text-brand-red font-display text-xs uppercase tracking-[0.2em] font-black block mb-1">Iniciar Locação</span>
            <h2 className="font-display font-black text-3xl uppercase tracking-tighter text-brand-dark leading-tight">
              Preencha para Agendar Visita
            </h2>
            <p className="text-stone-550 font-sans text-sm mt-2 leading-relaxed">
              O imóvel está livre e disponível para vistorias hoje mesmo! Ao submeter, você obtém um formulário de vistoria estruturado e pode nos acionar no WhatsApp com um único clique para liberar a chave do imóvel.
            </p>
          </div>
          <div className="bg-stone-900 text-white p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(230,57,70,1)] text-xs flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-red font-black uppercase tracking-wider">
              <Lock size={14} className="text-brand-red" />
              <span>Garantia de Acordo Amigável Direto</span>
            </div>
            <p className="text-stone-300 font-sans leading-relaxed">
              Trabalhamos de forma simplificada de particular para particular, gerando contratos transparentes que salvaguardam ambas as partes de surpresas jurídicas.
            </p>
          </div>
        </div>

        <ContactForm onSuccess={notifyFormSuccess} />

      </section>

      {/* Static detailed Specifications card banner */}
      <section id="specs-infocard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white p-6 md:p-10 border-4 border-black flex flex-col lg:flex-row items-center gap-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute -right-24 -bottom-24 h-64 w-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex-1">
            <span className="text-brand-red font-mono text-xs uppercase block tracking-[0.1em] font-extrabold mb-2">Memória Técnica Residida</span>
            <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-white mb-4">
              Especificações e Instalação Física da Loja
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-stone-350">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                <span>Piso frio em porcelanato de alta resistência e excelente padrão visual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                <span>Iluminação embutida completa inclusa na entrega das chaves</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                <span>Fechamento externo com grandes portas de vidro temperado duplo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                <span>Infraestrutura e ponto de escoamento para ar-condicionado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                <span>Ponto hidráulico e lavabo privativo interno em perfeitas condições</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                <span>Grade metálica de fechamento externo de segurança em perfeito funcionamento</span>
              </div>
            </div>
          </div>

          <div className="bg-stone-850 border-2 border-black border-l-8 border-l-brand-red p-5 w-full lg:w-96 text-xs text-stone-300">
            <div className="flex items-center gap-2 text-white font-black uppercase mb-2">
              <Info size={14} className="text-brand-red shrink-0" />
              <span>Importante para o Inquilino</span>
            </div>
            <p className="leading-relaxed font-sans text-stone-350">
              O imóvel possui acessibilidade integral de frente para a rua (sem degraus impeditivos), possui faturamento elétrico monofásico independente direto com a concessionária Light, e não cobra taxa condominial alta que onera outros pontos resididos de shoppings!
            </p>
          </div>

        </div>
      </section>

      {/* Footer copyright */}
      <footer id="app-footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t-2 border-black text-center text-stone-500 font-sans text-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500">
            © 2026 Loja Vila Isabel Ltda. Aluguel de Ponto Comercial Particular. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/5521990418350?text=Olá!%20Estou%20vendo%20o%20site%20da%20loja%20de%2015%20m².%20Gostaria%20de%20conversar." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-red hover:text-black font-black uppercase tracking-wider"
            >
              Fale no WhatsApp: (21) 99041-8350
            </a>
          </div>
        </div>
      </footer>

      {/* Floating dynamic success toast */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border-2 border-black text-stone-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce flex items-center gap-3">
          <div className="bg-emerald-500 p-1.5 border border-black text-white">
            <CheckCircle2 size={16} />
          </div>
          <div>
            <span className="font-display font-black uppercase text-xs block text-brand-red">Cupom Gerado!</span>
            <span className="text-[10px] text-stone-600 block">Clique em "Enviar Confirmar via WhatsApp" para enviar.</span>
          </div>
        </div>
      )}

    </div>
  );
}
