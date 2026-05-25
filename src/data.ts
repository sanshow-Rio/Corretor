/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SlideItem, BusinessConfig, MapMarker } from './types';

// The exact slides representing the properties and conditions shown in the original imagery
export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    tag: "SUA MARCA",
    title: "Na Melhor Vitrine De Vila Isabel!",
    subtitle: "Loja de frente para a rua com excelente exposição comercial",
    description: "Espaço perfeito para ver seu negócio crescer, oferecendo toda a visibilidade e o fluxo constante que você precisa no comércio de Vila Isabel.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
    badge: "Oportunidade Única",
    price: "R$ 4.200/mês"
  },
  {
    id: 2,
    tag: "LOJA DE FRENTE",
    title: "15 m² Altamente Visíveis",
    subtitle: "Rua Boulevard 28 de Setembro • Em frente ao Prezunic",
    description: "Excelente exposição comercial com frente total para calçada de grande movimentação de pedestre e fluxo veicular. Sua loja impossível de ser ignorada.",
    tags: ["15 m²", "Vitrine Integral", "Vila Isabel"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=80",
    badge: "Disponível",
    price: "R$ 4.200/mês"
  },
  {
    id: 3,
    tag: "INTERIOR DO IMÓVEL",
    title: "Espaço Amplo & Acabado",
    subtitle: "Pronto para receber o layout do seu negócio",
    description: "O imóvel possui piso em porcelanato claro de alta resistência, paredes preparadas, iluminação LED embutida completa inclusa e espaço otimizado para fácil manutenção.",
    tags: ["Espaço Amplo", "Piso em Porcelanato", "Iluminação LED inclusa"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
    badge: "Acabamento Premium"
  },
  {
    id: 4,
    tag: "LOCALIZAÇÃO PRIVILEGIADA",
    title: "Perto De Tudo O Que Move O Bairro",
    subtitle: "No coração pulsante de Vila Isabel",
    description: "Localizado estrategicamente em frente ao Supermercado Prezunic, garantindo tráfego natural qualificado. Próximo à UERJ, Hospital Pedro Ernesto e Shopping Boulevard. Acesso rápido à Tijuca, Maracanã e Centro.",
    tags: ["UERJ", "Maracanã", "Prezunic", "Hospital Pedro Ernesto"],
    image: "https://images.unsplash.com/photo-1574950578143-858c6fc58922?w=1200&auto=format&fit=crop&q=80",
    badge: "Localização Nota 10"
  },
  {
    id: 5,
    tag: "CONDIÇÕES FACILITADAS",
    title: "Aluguel Sem Burocracia",
    subtitle: "Processo simples, rápido e direto: Pagou, Entrou!",
    description: "Diga adeus à burocracia interminável de imobiliárias convencionais. Facilitamos para o empreendedor viabilizar seu ponto comercial rapidamente.",
    tags: ["Sem Fiador", "Sem Depósito", "Entrada Imediata"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80",
    badge: "Sem Burocracia"
  },
  {
    id: 6,
    tag: "ALUGUEL MENSAL",
    title: "R$ 4.200 Sem Surpresas",
    subtitle: "Contate diretamente agora mesmo",
    description: "Comece a operar no melhor ponto comercial. Clique no botão abaixo para bater um papo no WhatsApp e agendar sua visita imediata hoje mesmo!",
    tags: ["Vila Isabel", "Rua 28 de Setembro", "Próx. UERJ"],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&auto=format&fit=crop&q=80",
    badge: "Melhor Custo-Benefício",
    price: "R$ 4.200/mês"
  }
];

// Interactive Business Selector config to demonstrate usability & versatility of the 15m²
export const BUSINESS_CONFIGS: BusinessConfig[] = [
  {
    id: 'loja',
    name: 'Loja / Boutique',
    icon: 'Store',
    suitability: 'Excelente',
    description: 'Espaço perfeito para boutiques de roupas, óticas, perfumarias, acessórios, cosméticos ou pequenos magazines devido à imensa vitrine de vidro.',
    capacityRecommendation: 'Até 4 clientes simultâneos confortavelmente mais 1 atendente.',
    layoutTip: 'Aproveite paredes laterais para nichos iluminados de exposição e mantenha o balcão no fundo para encorajar entrada integral no espaço.',
    advantages: ['Vitrine voltada inteiramente para a rua de alto movimento', 'Piso de porcelanato que valoriza produtos de luxo/acessórios', 'Localizado em frente ao Prezunic, capturando compras por impulso'],
    estimatedDailyFlowMultiplier: 1.5
  },
  {
    id: 'salao',
    name: 'Salão de Beleza / Nail bar',
    icon: 'Sparkles',
    suitability: 'Muito Alta',
    description: 'Adequado para esmalterias (nail bars), barbearias rápidas, sobrancelhas e design estético express.',
    capacityRecommendation: 'Até 2 postos de atendimento simultâneos com ampla folga de circulação.',
    layoutTip: 'Instale espelhos grandes nas paredes laterais para ampliar visualmente a sensação de espaço vertical e use móveis suspensos.',
    advantages: ['Acesso independente ideal para horários expandidos', 'Iluminação inclusa de alto rendimento propícia para beleza', 'Fácil adaptação para lavatório e sistema hidráulico'],
    estimatedDailyFlowMultiplier: 1.2
  },
  {
    id: 'escritorio',
    name: 'Escritório / Coworking Privado',
    icon: 'Briefcase',
    suitability: 'Excelente',
    description: 'Perfeito para advocacia, contabilidade, agências digitais, corretores, despachantes ou suporte técnico local.',
    capacityRecommendation: 'Ideal para 2 postos de trabalho fixos com mesa de atendimento complementar.',
    layoutTip: 'Utilize a parede de fundo para uma estante decorativa com livros ou prêmios e uma divisória leve de vidro para separar a área técnica da recepção.',
    advantages: ['Vila Isabel é polo comercial nobre com fácil acesso de ônibus/metrô', 'Localização famosa e de alta credibilidade para marcar reuniões', 'Sinalização na vitrine para captação passiva de pedestres locais'],
    estimatedDailyFlowMultiplier: 0.8
  },
  {
    id: 'delivery',
    name: 'Delivery / Takeaway',
    icon: 'Bike',
    suitability: 'Muito Alta',
    description: 'Ponto ideal de recebimento/entrega para docerias gourmet, cafeterias expressas, açaí takeaway, tabacaria ou lanches rápidos.',
    capacityRecommendation: 'Balcão de atendimento frontal com cozinha compacta ou ponto de montagem atrás.',
    layoutTip: 'Crie uma bancada voltada diretamente para o vidro com abertura de atendimento rápido, deixando os entregadores do lado externo navegando com facilidade.',
    advantages: ['Ponto estratégico de alta velocidade para motoboys operantes na Zona Norte', 'Zero taxa de condomínio alto que inviabilizaria delivery convencional', 'Rodeado por grande densidade residencial em Vila Isabel e Tijuca'],
    estimatedDailyFlowMultiplier: 2.0
  },
  {
    id: 'clinica',
    name: 'Clínica / Consultório',
    icon: 'Stethoscope',
    suitability: 'Alta',
    description: 'Óptimo para atendimentos individuais: psicologia, nutrição, massoterapia, fisioterapia expressa ou fonoaudiologia.',
    capacityRecommendation: 'Espaço de maca/atendimento acústico reservado + recepção compacta.',
    layoutTip: 'Uma cabine acústica ou biombo de drywall dividirá facilmente os 15 m² em uma charmosa área de atendimento privado e uma saleta de espera.',
    advantages: ['Muito perto do Hospital Pedro Ernesto, gerando fluxo natural da área de saúde', 'Acesso fácil no nível da rua, ideal para pacientes com dificuldades de locomoção', 'Ambiente limpo e polido de origem'],
    estimatedDailyFlowMultiplier: 0.7
  },
  {
    id: 'cafe',
    name: 'Cafeteria / Conveniência',
    icon: 'Coffee',
    suitability: 'Ideal',
    description: 'Seja o café do bairro com cafés especiais, pão de queijo quentinho e doces finos na saída do Prezunic.',
    capacityRecommendation: 'Balcão em L com 2 banquetas externas de apoio rápido.',
    layoutTip: 'Coloque a charmosa máquina de café expresso reluzente próxima à entrada de vidro para espalhar o aroma na calçada e fisgar pedestres.',
    advantages: ['Vitrine limpa de alta atratividade visual', 'Público circulante alto do mercado logo à frente que ama café pós-compras', 'Liberdade total de horários para abrir cedo nos fins de semana'],
    estimatedDailyFlowMultiplier: 1.8
  },
  {
    id: 'cursos',
    name: 'Aulas Particulares / Explicações',
    icon: 'GraduationCap',
    suitability: 'Alta',
    description: 'Ateliê de artes, cursos de finanças pessoais, aulas de idiomas particulares ou explicações de reforço escolar.',
    capacityRecommendation: 'Mesa central de reuniões comportando até 6 alunos sentados simultaneamente e 1 professor.',
    layoutTip: 'Instale uma lousa de vidro fosco em uma das paredes laterais e utilize cadeiras ergonômicas dobráveis para liberar espaço se necessário.',
    advantages: ['Muito próximo da UERJ e de escolas locais renomadas de Vila Isabel', 'Fácil de localizar e acesso rápido com transporte público da Av. 28 de Setembro', 'Iluminação forte perfeita para leitura e foco acadêmico'],
    estimatedDailyFlowMultiplier: 0.9
  }
];

// Markers for simulated Interactive Map
export const MAP_MARKERS: MapMarker[] = [
  {
    id: "prezunic",
    name: "Supermercado Prezunic",
    distance: "Em frente (menos de 1 minuto)",
    description: "Principal âncora comercial da redondeza, gerando tráfego qualificado de milhares de compradores diários direto na sua calçada.",
    type: "comercio",
    trafficLevel: "Altíssimo"
  },
  {
    id: "uerj",
    name: "Universidade do Estado do RJ (UERJ)",
    distance: "Apenas 450 metros",
    description: "Polo universitário gigantesco com milhares de estudantes, professores e servidores circulando diariamente.",
    type: "educacao",
    trafficLevel: "Altíssimo"
  },
  {
    id: "hupe",
    name: "Hospital Universitário Pedro Ernesto",
    distance: "Apenas 350 metros",
    description: "Grande hospital público de referência, gerando tráfego alto e ininterrupto de profissionais, pacientes e prestadores de serviço.",
    type: "saude",
    trafficLevel: "Altíssimo"
  },
  {
    id: "boulevard28",
    name: "Av. Boulevard 28 de Setembro",
    distance: "A 50 metros",
    description: "A artéria principal de Vila Isabel com comércio fervilhante, dezenas de linhas de ônibus e alta atividade econômica.",
    type: "transporte",
    trafficLevel: "Altíssimo"
  },
  {
    id: "shopping",
    name: "Shopping Boulevard",
    distance: "A 800 metros",
    description: "O maior centro de compras de Vila Isabel, consolidado como ponto de lazer, gastronomia e negócios da região.",
    type: "comercio",
    trafficLevel: "Alto"
  },
  {
    id: "maracana",
    name: "Estádio do Maracanã",
    distance: "A 1.2 km (5 minutos de carro/bike)",
    description: "Símbolo icônico mundial e vizinho estratégico, gerando fluxo em dias de eventos esportivos e shows.",
    type: "transporte",
    trafficLevel: "Alto"
  }
];
