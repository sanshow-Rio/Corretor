/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SlideItem {
  id: number;
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  image: string;
  badge?: string;
  price?: string;
}

export type BusinessType = 
  | 'loja' 
  | 'salao' 
  | 'escritorio' 
  | 'delivery' 
  | 'clinica' 
  | 'cafe' 
  | 'cursos';

export interface BusinessConfig {
  id: BusinessType;
  name: string;
  icon: string;
  suitability: 'Excelente' | 'Muito Alta' | 'Alta' | 'Ideal';
  description: string;
  capacityRecommendation: string;
  layoutTip: string;
  advantages: string[];
  estimatedDailyFlowMultiplier: number; // based on high flow of 28 de Setembro
}

export interface ScheduleForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  businessType: BusinessType | '';
  notes: string;
}

export interface MapMarker {
  id: string;
  name: string;
  distance: string;
  description: string;
  type: 'transporte' | 'saude' | 'educacao' | 'governo' | 'comercio';
  trafficLevel: 'Altíssimo' | 'Alto' | 'Moderado';
}
