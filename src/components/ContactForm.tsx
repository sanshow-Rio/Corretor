/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Send, 
  Phone, 
  User, 
  Mail, 
  Briefcase, 
  MessageSquare, 
  CheckCircle,
  HelpCircle,
  Copy,
  ExternalLink,
  Users
} from 'lucide-react';
import { ScheduleForm, BusinessType } from '../types';
import { BUSINESS_CONFIGS } from '../data';

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState<ScheduleForm>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '14:00',
    businessType: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getWhatsAppLink = () => {
    const businessLabel = form.businessType 
      ? BUSINESS_CONFIGS.find(b => b.id === form.businessType)?.name 
      : 'Não especificado';

    const formattedDate = form.date 
      ? new Date(form.date + 'T00:00:00').toLocaleDateString('pt-BR') 
      : 'A combinar';

    const message = `Olá! Tenho grande interesse em alugar a loja de frente (15 m²) em Vila Isabel.%0A` +
      `Meus dados de contato:%0A` +
      `- *Nome*: ${form.name}%0A` +
      `- *WhatsApp*: ${form.phone}%0A` +
      `- *Email*: ${form.email || 'Não informado'}%0A` +
      `- *Ramo de Negócio*: ${businessLabel}%0A` +
      `- *Data Preferencial de Visita*: ${formattedDate} às ${form.time}%0A` +
      `${form.notes ? `- *Observações*: ${form.notes}%0A` : ''}` +
      `Gostaria de agendar a vistoria e entender os próximos passos sem burocracia!`;

    return `https://wa.me/5521990418350?text=${message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Por favor, preencha pelo menos o seu nome e telefone/WhatsApp.");
      return;
    }
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleCopyText = () => {
    const businessLabel = form.businessType 
      ? BUSINESS_CONFIGS.find(b => b.id === form.businessType)?.name 
      : 'Não especificado';
    const formattedDate = form.date 
      ? new Date(form.date + 'T00:00:00').toLocaleDateString('pt-BR') 
      : 'A combinar';

    const rawText = `Olá! Tenho grande interesse em alugar a loja de frente (15 m²) de Vila Isabel.\n` +
      `Meus dados:\n` +
      `- Nome: ${form.name}\n` +
      `- WhatsApp: ${form.phone}\n` +
      `- Email: ${form.email || 'Não informado'}\n` +
      `- Ramo: ${businessLabel}\n` +
      `- Visita: ${formattedDate} às ${form.time}\n` +
      (form.notes ? `- Obs: ${form.notes}\n` : '') +
      `Aguardo retorno para agendamento!`;

    navigator.clipboard.writeText(rawText);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div id="booking-contact-card" className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-brand-dark">
      
      {/* Decorative scarcity bar / Demand statistics header */}
      <div className="bg-brand-red border-b-4 border-black py-3 px-6 flex items-center justify-between font-display text-xs font-black text-white uppercase tracking-wider">
        <div className="flex items-center gap-1.5">
          <Users size={14} className="animate-pulse" />
          <span>ALTA PROCURA EM VILA ISABEL</span>
        </div>
        <div className="bg-white text-stone-900 border border-black px-2.5 py-0.5 text-[10px] font-black">
          3 Visitas agendadas esta semana
        </div>
      </div>

      <div className="p-6 md:p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-brand-dark">Agende uma Visita Imediata</h3>
              <p className="text-stone-500 font-sans text-sm mt-1">
                Preencha os campos abaixo para gerar sua solicitação e dar o primeiro passo. Sem burocracia de fiadores ou depósitos prévios exagerados!
              </p>
            </div>

            {/* Input Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                <User size={13} className="text-stone-900 shrink-0" />
                <span>Nome Completo *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleInputChange}
                placeholder="Ex: Carlos Silva"
                className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-stone-50 text-stone-950 focus:bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Two column inputs: Phone, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                  <Phone size={13} className="text-stone-900 shrink-0" />
                  <span>WhatsApp / Telefone *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleInputChange}
                  placeholder="Ex: (21) 99041-xxxx"
                  className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-stone-50 text-stone-950 focus:bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                  <Mail size={13} className="text-stone-900 shrink-0" />
                  <span>Email de Contato (Opcional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Ex: carlos@seucomercio.com"
                  className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-stone-50 text-stone-950 focus:bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

            </div>

            {/* Column 2: Business Type & Preferred Date */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="flex flex-col gap-1.5 md:col-span-1">
                <label htmlFor="businessType" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                  <Briefcase size={13} className="text-stone-900 shrink-0" />
                  <span>Ramo Comercial</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleInputChange}
                  className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-white text-stone-950 focus:ring-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <option value="">Selecione...</option>
                  {BUSINESS_CONFIGS.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                  <option value="outro font-bold">Outro Modelo</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-1">
                <label htmlFor="date" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                  <Calendar size={13} className="text-stone-900 shrink-0" />
                  <span>Data para Visita</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleInputChange}
                  className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-stone-50 text-stone-950 focus:bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-1">
                <label htmlFor="time" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                  <Clock size={13} className="text-stone-900 shrink-0" />
                  <span>Horário Sugerido</span>
                </label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleInputChange}
                  className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-white text-stone-950 focus:ring-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <option value="09:00">09:00 (Manhã)</option>
                  <option value="10:30">10:30 (Manhã)</option>
                  <option value="12:00">12:00 (Almoço)</option>
                  <option value="14:00">14:00 (Tarde)</option>
                  <option value="16:00">16:00 (Tarde)</option>
                  <option value="17:30">17:30 (Final do dia)</option>
                </select>
              </div>

            </div>

            {/* Custom Notes */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="notes" className="text-xs font-display font-black uppercase tracking-wide text-brand-dark flex items-center gap-1">
                <MessageSquare size={13} className="text-stone-900 shrink-0" />
                <span>Mensagem ou Observações</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleInputChange}
                placeholder="Ex: Gostaria de saber mais sobre a rede elétrica ou as condições de carência do primeiro mês..."
                className="font-sans text-sm border-2 border-black px-3.5 py-2.5 focus:outline-none bg-stone-50 text-stone-950 focus:bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Button Submit */}
            <button
              type="submit"
              className="mt-2 w-full bg-brand-red hover:bg-neutral-950 border-2 border-black text-white font-display font-black text-sm md:text-base py-4 uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Gerar Cupom & Validar no WhatsApp</span>
              <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </form>
        ) : (
          /* Submission success states */
          <div className="flex flex-col items-center text-center py-6 gap-6">
            <div className="bg-emerald-100 p-4 border-2 border-black text-emerald-600 animate-bounce">
              <CheckCircle size={44} className="fill-emerald-100" />
            </div>

            <div>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-brand-dark leading-tight">Agendamento Quase Pronto!</h3>
              <p className="text-stone-500 font-sans text-sm mt-2 max-w-sm">
                Geramos com sucesso o cupom da sua vistoria comercial sem burocracia. Para confirmar definitivamente com o proprietário, basta clicar no botão verde abaixo.
              </p>
            </div>

            {/* Simulated Receipt Voucher */}
            <div className="w-full bg-stone-50 p-5 border-2 border-black text-left relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-0 right-0 bg-brand-red border-l border-b border-black text-white text-[9px] font-mono px-3 py-1 font-black uppercase">
                CUPOM DE VISITA
              </div>
              <ul className="text-xs font-mono text-stone-700 flex flex-col gap-2">
                <li><strong className="text-stone-900 uppercase">Interessado:</strong> {form.name}</li>
                <li><strong className="text-stone-900 uppercase">Celular:</strong> {form.phone}</li>
                <li><strong className="text-stone-900 uppercase">Ramo:</strong> {form.businessType ? BUSINESS_CONFIGS.find(b => b.id === form.businessType)?.name : 'Outro modelo comercial'}</li>
                <li><strong className="text-stone-900 uppercase">Data Sugerida:</strong> {form.date ? new Date(form.date + 'T00:00:00').toLocaleDateString('pt-BR') : 'A acertar'} às {form.time}</li>
              </ul>
            </div>

            {/* Ultimate Action Buttons */}
            <div className="flex flex-col gap-3 w-full">
              
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 border-2 border-black text-white font-display font-black uppercase tracking-wider py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Enviar Confirmar via WhatsApp</span>
                <ExternalLink size={16} />
              </a>

              <div className="flex flex-col xs:flex-row gap-2.5 w-full">
                
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 font-display font-bold text-xs py-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none flex items-center justify-center gap-1.5 transition-all text-slate-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Copy size={13} />
                  <span>{copyStatus ? 'Copiado!' : 'Copiar Texto da Mensagem'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="flex-1 bg-white hover:bg-stone-50 text-stone-600 font-display font-bold text-xs py-2.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none flex items-center justify-center gap-1.5 transition-all text-slate-5050 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Refazer Cadastro</span>
                </button>

              </div>

            </div>

            {/* Informational help note */}
            <span className="text-[11px] text-stone-400 font-mono flex items-center gap-1">
              <HelpCircle size={12} className="text-brand-red" />
              <span>Dúvidas comuns? Sem taxas extras ou carência misteriosa.</span>
            </span>

          </div>
        )}
      </div>

    </div>
  );
}
