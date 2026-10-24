export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  cost: number;
  stock: number;
  badge?: string;
  isBestSeller?: boolean;
  isCombo?: boolean;
  affiliateCommission: number;
  images: string[];
  demoVideo?: string;
  description: string;
  features: string[];
  benefits: string[];
  adCopy?: string;
  paymentMethods: string[];
  category: string;
}

// Generador de Placeholder seguro con la identidad de Metales Acarigua (Texto Azul Marino #06112b)
const getPlaceholder = (text: string) => {
  const cleanText = text.replace(/\s+/g, '%20');
  return `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' style='background:%23f8fafc'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' font-weight='bold' fill='%2306112b'%3E${cleanText}%3C/text%3E%3C/svg%3E`;
};

export const products: Product[] = [
  {
    id: 'taladro-promaker-20v',
    title: 'Taladro Inalámbrico Promaker 20V Brushless',
    price: 85.00,
    originalPrice: 110.00,
    cost: 55.00,
    stock: 24,
    badge: 'Destacado',
    isBestSeller: true,
    isCombo: false,
    affiliateCommission: 8,
    category: 'Herramientas Eléctricas',
    images: [getPlaceholder('FOTO TALADRO PROMAKER')],
    demoVideo: '',
    description: 'Potencia, precisión y rendimiento en tus manos. Taladro profesional con motor Brushless (sin escobillas) para mayor durabilidad y autonomía.',
    features: ['Motor Brushless', 'Batería 20V Li-Ion', 'Velocidad variable'],
    benefits: ['Mayor durabilidad del motor', 'Diseño ergonómico', 'Ideal para uso industrial y hogar'],
    adCopy: '¡Potencia en tus manos! Llévate el Taladro Promaker 20V al mejor precio en Acarigua. Compra aquí: [ENLACE]',
    paymentMethods: ['Pago Móvil', 'Transferencia', 'Zelle', 'Efectivo'],
  },
  {
    id: 'lavaplatos-acero-inox',
    title: 'Lavaplatos de Acero Inoxidable',
    price: 45.00,
    cost: 25.00,
    stock: 15,
    badge: 'Calidad',
    isBestSeller: true,
    isCombo: false,
    affiliateCommission: 5,
    category: 'Hogar y Grifería',
    images: [getPlaceholder('FOTO LAVAPLATOS INOX')],
    description: 'Lavaplatos resistente a la corrosión, fabricado 100% en acero inoxidable. Ideal para remodelaciones de cocinas modernas y duraderas.',
    features: ['Acero Inoxidable de alta pureza', 'Medidas estándar', 'Diseño profundo'],
    benefits: ['No se oxida', 'Fácil de limpiar', 'Alta resistencia al uso rudo'],
    adCopy: 'Remodela tu cocina con nuestros lavaplatos de acero inoxidable. Calidad garantizada. Cómpralo aquí: [ENLACE]',
    paymentMethods: ['Pago Móvil', 'Transferencia', 'Zelle', 'Efectivo'],
  },
  {
    id: 'alambre-puas-c17',
    title: 'Rollo de Alambre de Púas C-17',
    price: 38.00,
    originalPrice: 45.00,
    cost: 22.00,
    stock: 50,
    badge: 'Seguridad',
    isBestSeller: false,
    isCombo: false,
    affiliateCommission: 4,
    category: 'Ferretería y Agro',
    images: [getPlaceholder('FOTO ALAMBRE DE PUAS')],
    description: 'Máxima seguridad perimetral para fincas, parcelas y terrenos. Alambre galvanizado de alta resistencia al clima.',
    features: ['Calibre 17', 'Galvanizado', 'Púas de 4 puntas de alta fijación'],
    benefits: ['Protección perimetral total', 'Fácil instalación', 'Alta vida útil en exteriores'],
    adCopy: 'Protege tu propiedad con el mejor alambre de púas C-17. Cotiza el tuyo aquí: [ENLACE]',
    paymentMethods: ['Pago Móvil', 'Transferencia', 'Zelle', 'Efectivo'],
  },
  {
    id: 'laminas-cindu',
    title: 'Láminas para Techo Cindu',
    price: 18.00,
    cost: 11.00,
    stock: 100,
    badge: 'Construcción',
    isBestSeller: true,
    isCombo: false,
    affiliateCommission: 2,
    category: 'Techos y Láminas',
    images: [getPlaceholder('FOTO LAMINAS CINDU')],
    description: 'Láminas climatizadas e impermeables ideales para cualquier tipo de techo. Confort térmico y resistencia garantizada a la intemperie.',
    features: ['Aislamiento térmico', 'Resistente a la corrosión', 'Variedad de dimensiones'],
    benefits: ['Ambientes más frescos', 'Cero filtraciones', 'Rápida instalación estructural'],
    adCopy: '¿Construyendo o remodelando? Tenemos las láminas Cindu que tu techo necesita. Pídelas aquí: [ENLACE]',
    paymentMethods: ['Pago Móvil', 'Transferencia', 'Zelle', 'Efectivo'],
  },
  {
    id: 'tubo-estructural',
    title: 'Tubos Estructurales de Hierro',
    price: 24.00,
    cost: 15.00,
    stock: 200,
    badge: 'Estructural',
    isBestSeller: false,
    isCombo: false,
    affiliateCommission: 3,
    category: 'Metales y Perfiles',
    images: [getPlaceholder('FOTO TUBOS HIERRO')],
    description: 'Tubos de hierro estructural para herrería, galpones y construcción en general. Excelente soldabilidad y firmeza.',
    features: ['Hierro de alta calidad', 'Longitud de 6 metros', 'Diferentes espesores disponibles'],
    benefits: ['Alta resistencia estructural', 'Perfectos para trabajos de herrería', 'Acabado liso para pintar'],
    adCopy: 'Todo en metales y perfiles para tu obra. Tubos estructurales al mayor y detal. Contáctanos: [ENLACE]',
    paymentMethods: ['Pago Móvil', 'Transferencia', 'Zelle', 'Efectivo'],
  },
  {
    id: 'reflector-solar-100w',
    title: 'Reflector Solar LED 100W Novapro',
    price: 45.00,
    originalPrice: 55.00,
    cost: 28.00,
    stock: 30,
    badge: 'Oferta',
    isBestSeller: true,
    isCombo: false,
    affiliateCommission: 5,
    category: 'Iluminación y Solar',
    images: [getPlaceholder('FOTO REFLECTOR SOLAR')],
    description: 'Ilumina tus exteriores sin gastar electricidad. Panel solar integrado y batería de larga duración. Certificación resistente al agua IP67.',
    features: ['Potencia: 100W', 'Protección IP67 (Agua/Polvo)', 'Control Remoto Incluido'],
    benefits: ['Ahorro del 100% en electricidad', 'Se enciende solo de noche', 'Iluminación continua continua'],
    adCopy: '¡No más zonas oscuras! Reflector Solar Novapro 100W con panel y control. Compra el tuyo: [ENLACE]',
    paymentMethods: ['Pago Móvil', 'Transferencia', 'Zelle', 'Efectivo'],
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getAllProductIds(): string[] {
  return products.map((product) => product.id);
}