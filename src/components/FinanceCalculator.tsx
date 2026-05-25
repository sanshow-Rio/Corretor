/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Store, 
  Sparkles, 
  Briefcase, 
  Bike, 
  Stethoscope, 
  Coffee, 
  GraduationCap,
  TrendingUp,
  Receipt,
  Users,
  Building,
  CheckCircle2,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { BUSINESS_CONFIGS } from '../data';
import { BusinessType } from '../types';

export default function FinanceCalculator() {
  const [selectedType, setSelectedType] = useState<BusinessType>('loja');
  const [averageTicket, setAverageTicket] = useState<number>(85); // average sales value R$
  const [dailyCustomers, setDailyCustomers] = useState<number>(10); // clients per day
  const [cogsPercent, setCogsPercent] = useState<number>(45); // cost of product/service %

  const business = BUSINESS_CONFIGS.find(b => b.id === selectedType) || BUSINESS_CONFIGS[0];

  // Calculations based on 26 active business days per month
  const activeDays = 26;
  const monthlyCustomers = dailyCustomers * activeDays;
  const monthlyRevenue = monthlyCustomers * averageTicket;
  
  // Fixed costs
  const rent = 4200;
  const estimatedUtilities = 350; // water + electricity, estimated
  
  // Variable Costs (COGS)
  const monthlyCOGS = (monthlyRevenue * cogsPercent) / 100;
  
  // Total profit estimate
  const totalCostOfOperations = rent + estimatedUtilities + monthlyCOGS;
  const estimatedNetProfit = Math.max(0, monthlyRevenue - totalCostOfOperations);
  const profitMarginPercent = monthlyRevenue > 0 ? (estimatedNetProfit / monthlyRevenue) * 100 : 0;
  const rentToRevenuePercent = monthlyRevenue > 0 ? (rent / monthlyRevenue) * 100 : 0;

  // Feasibility assessment
  let healthColor = 'text-amber-500 bg-amber-50';
  let healthBorder = 'border-amber-200';
  let healthTitle = 'Em Planejamento';
  let healthStatusMessage = 'Regule os controles abaixo para obter uma projeção de custos.';

  if (monthlyRevenue > 0) {
    if (rentToRevenuePercent > 40) {
      healthColor = 'text-stone-900 bg-rose-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(230,57,70,1)]';
      healthBorder = 'border-rose-600';
      healthTitle = 'Cuidado com os Custos';
      healthStatusMessage = 'O aluguel representa uma fatia considerável do seu faturamento projetado. Considere aumentar o tíquete médio de vendas ou expandir o volume de atendimentos aproveitando o fluxo do Prezunic!';
    } else if (rentToRevenuePercent > 15) {
      healthColor = 'text-stone-900 bg-sky-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(14,165,233,1)]';
      healthBorder = 'border-sky-600';
      healthTitle = 'Totalmente Viável';
      healthStatusMessage = 'Ótimo equilíbrio econômico! A alta movimentação natural de pessoas na Rua 28 de Setembro dá total suporte para atingir e superar essa meta diariamente.';
    } else {
      healthColor = 'text-stone-900 bg-emerald-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]';
      healthBorder = 'border-emerald-600';
      healthTitle = 'Altamente Lucrativo';
      healthStatusMessage = 'Excelente! Com essa taxa de conversão, seu ponto comercial pagará o custo operacional rapidamente com altíssima margem de retorno líquido.';
    }
  } else {
    healthColor = 'text-stone-700 bg-stone-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';
    healthBorder = 'border-stone-400';
    healthTitle = 'Em Planejamento';
    healthStatusMessage = 'Regule os controles abaixo para obter uma projeção de custos.';
  }

  // Get matching key icon for business
  const getBusinessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store': return <Store className="h-5 w-5" />;
      case 'Sparkles': return <Sparkles className="h-5 w-5" />;
      case 'Briefcase': return <Briefcase className="h-5 w-5" />;
      case 'Bike': return <Bike className="h-5 w-5" />;
      case 'Stethoscope': return <Stethoscope className="h-5 w-5" />;
      case 'Coffee': return <Coffee className="h-5 w-5" />;
      case 'GraduationCap': return <GraduationCap className="h-5 w-5" />;
      default: return <Store className="h-5 w-5" />;
    }
  };

  return (
    <div id="finance-calc-widget" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Right Column / Left Column: Settings and inputs (5 cols) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div>
          <span className="text-brand-red font-display text-xs uppercase tracking-[0.2em] font-black block mb-1">Simulador de Negócios</span>
          <h3 className="font-display font-black text-2xl uppercase tracking-tight text-brand-dark">O que você pretende abrir?</h3>
          <p className="text-stone-500 font-sans text-sm mt-1">
            Selecione seu modelo de negócio para avaliar a versatilidade e retorno garantido da loja de 15 m² em frente ao supermercado.
          </p>
        </div>

        {/* Business Selector Radio buttons */}
        <div className="grid grid-cols-2 xs:grid-cols-2 gap-3">
          {BUSINESS_CONFIGS.map((cfg) => {
            const isSelected = cfg.id === selectedType;
            return (
              <button
                key={cfg.id}
                onClick={() => {
                  setSelectedType(cfg.id);
                  // Setup custom typical defaults based on business type to make simulation smart
                  if (cfg.id === 'loja') { setAverageTicket(90); setDailyCustomers(8); setCogsPercent(50); }
                  if (cfg.id === 'salao') { setAverageTicket(75); setDailyCustomers(10); setCogsPercent(25); }
                  if (cfg.id === 'escritorio') { setAverageTicket(250); setDailyCustomers(3); setCogsPercent(15); }
                  if (cfg.id === 'delivery') { setAverageTicket(40); setDailyCustomers(25); setCogsPercent(40); }
                  if (cfg.id === 'clinica') { setAverageTicket(150); setDailyCustomers(5); setCogsPercent(20); }
                  if (cfg.id === 'cafe') { setAverageTicket(22); setDailyCustomers(40); setCogsPercent(35); }
                  if (cfg.id === 'cursos') { setAverageTicket(120); setDailyCustomers(4); setCogsPercent(10); }
                }}
                className={`flex items-center gap-2 px-3 py-3 border-2 text-left transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-red text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none'
                }`}
              >
                <div className={isSelected ? 'text-white' : 'text-stone-500'}>
                  {getBusinessIcon(cfg.icon)}
                </div>
                <span className="font-sans font-bold text-xs truncate uppercase tracking-tight">{cfg.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic sliders custom structured */}
        <div className="flex flex-col gap-5 pt-4 border-t-2 border-black">
          
          {/* Average Ticket */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <label className="text-stone-800 font-display font-bold uppercase tracking-wide text-xs flex items-center gap-1.5">
                <Receipt className="h-4 w-4 text-stone-900" />
                <span>Tíquete Médio de Venda</span>
              </label>
              <span className="font-mono text-white font-black bg-stone-900 px-2.5 py-1 border border-black text-xs shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                R$ {averageTicket}
              </span>
            </div>
            <input 
              type="range"
              min="10"
              max="500"
              step="5"
              value={averageTicket}
              onChange={(e) => setAverageTicket(Number(e.target.value))}
              className="w-full accent-brand-red h-2 bg-stone-200 cursor-pointer border border-black"
            />
            <div className="flex justify-between text-[11px] text-stone-400 font-mono">
              <span>R$ 10</span>
              <span>R$ 500+</span>
            </div>
          </div>

          {/* Daily Customers */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <label className="text-stone-800 font-display font-bold uppercase tracking-wide text-xs flex items-center gap-1.5">
                <Users className="h-4 w-4 text-stone-900" />
                <span>Clientes Atendidos / Dia</span>
              </label>
              <span className="font-mono text-white font-black bg-stone-900 px-2.5 py-1 border border-black text-xs shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {dailyCustomers} clientes
              </span>
            </div>
            <input 
              type="range"
              min="1"
              max="100"
              step="1"
              value={dailyCustomers}
              onChange={(e) => setDailyCustomers(Number(e.target.value))}
              className="w-full accent-brand-red h-2 bg-stone-200 cursor-pointer border border-black"
            />
            <div className="flex justify-between text-[11px] text-stone-400 font-mono">
              <span>1 cliente</span>
              <span>100 clientes</span>
            </div>
          </div>

          {/* COGS Percentage */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <label className="text-stone-800 font-display font-bold uppercase tracking-wide text-xs flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-stone-900" />
                <span>Custo de Mercadorias / Operacional (%)</span>
              </label>
              <span className="font-mono text-white font-black bg-stone-900 px-2.5 py-1 border border-black text-xs shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {cogsPercent}%
              </span>
            </div>
            <input 
              type="range"
              min="5"
              max="80"
              step="5"
              value={cogsPercent}
              onChange={(e) => setCogsPercent(Number(e.target.value))}
              className="w-full accent-brand-red h-2 bg-stone-200 cursor-pointer border border-black"
            />
            <div className="flex justify-between text-[11px] text-stone-400 font-sans leading-tight">
              <span>Serviço puro (baixo custo)</span>
              <span>Comércio de mercadorias (custo alto)</span>
            </div>
          </div>

        </div>

      </div>

      {/* Main Column: Math display, diagnostics, tips (7 cols) */}
      <div className="lg:col-span-7 bg-stone-50 p-5 md:p-6 border-2 border-black flex flex-col justify-between gap-6">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-display font-black text-stone-400 uppercase tracking-widest block mb-1">Faturamento Bruto</span>
            <span className="font-mono text-xl md:text-2xl font-black text-brand-dark block">
              R$ {monthlyRevenue.toLocaleString('pt-BR')}
            </span>
            <span className="text-[11px] text-stone-500 block leading-tight mt-1">
              {monthlyCustomers} vendas ({activeDays} dias)
            </span>
          </div>

          <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(230,57,70,1)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-1 bg-brand-red w-full" />
            <span className="text-[10px] font-display font-black text-stone-400 uppercase tracking-widest block mb-1">Custo Aluguel</span>
            <span className="font-mono text-xl md:text-2xl font-black text-brand-dark block">Fixo</span>
            <span className="font-mono text-sm text-brand-red font-black block mt-0.5">R$ 4.200/mês</span>
            <div className="text-[11px] font-sans font-medium text-stone-600 mt-1">
              Compromete <strong className="font-mono text-brand-red font-black">{rentToRevenuePercent.toFixed(1)}%</strong> da receita
            </div>
          </div>

          <div className="bg-emerald-50 p-4 border-2 border-emerald-500 shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] relative overflow-hidden">
            <span className="text-[10px] font-display font-black text-emerald-800 uppercase tracking-widest block mb-1">Lucro Líquido Real</span>
            <span className="font-mono text-xl md:text-2xl font-black text-emerald-700 block">
              R$ {estimatedNetProfit.toLocaleString('pt-BR')}
            </span>
            <span className="text-[11px] text-emerald-600 font-bold">
              Margem de {profitMarginPercent.toFixed(0)}% mensal
            </span>
          </div>

        </div>

        {/* Business Compatibility analysis block */}
        <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-start gap-3">
            <div className="bg-stone-900 p-2 border border-black text-white mt-0.5">
              {getBusinessIcon(business.icon)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display font-black uppercase text-brand-dark text-sm leading-none">{business.name}</h4>
                <span className="text-[9px] font-mono font-black bg-emerald-500 text-white border border-black px-2 py-0.5 uppercase tracking-wide">
                  Compatibilidade: {business.suitability}
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {business.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t-2 border-black text-xs">
            <div>
              <span className="font-display font-black uppercase text-brand-dark block mb-1">Sugerido para os 15m²:</span>
              <p className="text-stone-600 leading-relaxed">{business.capacityRecommendation}</p>
            </div>
            <div>
              <span className="font-display font-black uppercase text-brand-dark block mb-1">Dica de Layout Interno:</span>
              <p className="text-stone-600 leading-relaxed">{business.layoutTip}</p>
            </div>
          </div>
        </div>

        {/* Feasibility Verdict Box */}
        <div className={`p-4 ${healthColor} flex flex-col md:flex-row md:items-center gap-4`}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display font-black text-sm uppercase tracking-wider">{healthTitle}</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-850 font-sans">
              {healthStatusMessage}
            </p>
          </div>
        </div>

        {/* Business Tips / Advantages section */}
        <div className="bg-stone-50 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="text-brand-dark font-display font-black text-xs flex items-center gap-1.5 uppercase tracking-wider mb-2">
            <Lightbulb size={14} className="text-brand-red" />
            <span>Por que esse ponto físico potencializa seu negócio?</span>
          </h4>
          <ul className="text-xs text-stone-650 text-stone-600 flex flex-col gap-1.5">
            {business.advantages.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}
