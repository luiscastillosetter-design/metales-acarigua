'use client';

import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

const defaultSlides = [
  {
    id: 1,
    badge: 'CALIDAD Y RESISTENCIA',
    title: 'Materiales y Metales Acarigua',
    subtitle: 'Tubos estructurales, láminas para techo, ferretería y herramientas profesionales para tu obra o remodelación.',
    btnText: 'Ver Catálogo',
    btnLink: '/catalogo',
    bgGradient: 'from-red-700 via-red-600 to-red-800',
    desktopImg: '/fondo-hero-pc.png',
    mobileImg: '/fondo-hero-movil.png',
  },
  {
    id: 2,
    badge: 'HERRAMIENTAS ELÉCTRICAS',
    title: 'Distribuidor Autorizado Promaker',
    subtitle: 'Encuentra taladros, esmeriles y equipos industriales con la mejor garantía y potencia para tu proyecto.',
    btnText: 'Comprar Herramientas',
    btnLink: '/catalogo?category=Herramientas%20Eléctricas',
    bgGradient: 'from-slate-950 via-slate-900 to-slate-800',
    desktopImg: '/fondo-hero-pc.png',
    mobileImg: '/fondo-hero-movil.png',
  },
  {
    id: 3,
    badge: 'DESPACHO RÁPIDO Y SEGURO',
    title: 'Envíos en Acarigua y Nacional',
    subtitle: 'Cotiza tus materiales hoy mismo. Contamos con despacho directo en la zona de Acarigua-Araure.',
    btnText: 'Contactar Asesor',
    btnLink: '/checkout',
    bgGradient: 'from-slate-900 via-red-900 to-slate-900',
    desktopImg: '/fondo-hero-pc.png',
    mobileImg: '/fondo-hero-movil.png',
  },
];

export function HeroCarousel() {
  const autoplayOptions = { delay: 6500, stopOnInteraction: false };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="w-full relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg shadow-slate-200/50">
      <div ref={emblaRef} className="overflow-hidden w-full">
        <div className="flex w-full">
          {defaultSlides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-[0_0_100%] min-w-0 relative h-[48vh] md:h-[62vh] min-h-[380px] md:min-h-[480px] py-12 md:py-20 px-6 md:px-20 text-white bg-gradient-to-r ${slide.bgGradient} flex flex-col justify-center items-start overflow-hidden group`}
            >
              {/* Imágenes de Fondo Dinámicas */}
              {slide.desktopImg && <div className="hidden md:block absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${slide.desktopImg}')` }}></div>}
              {slide.mobileImg && <div className="block md:hidden absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${slide.mobileImg}')` }}></div>}
              
              {/* Capa de oscurecimiento para que el texto resalte */}
              {(slide.desktopImg || slide.mobileImg) && <div className="absolute inset-0 bg-black/60 z-0"></div>}

              <div className="max-w-3xl space-y-4 md:space-y-6 relative z-10 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[11px] md:text-xs font-black uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  {slide.badge}
                </span>

                <h1 className="text-3xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-xs md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="pt-2">
                  <Link
                    href={slide.btnLink}
                    className="inline-flex items-center gap-2.5 bg-white text-slate-900 hover:bg-orange-50 font-black px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-xs md:text-sm active:scale-95 cursor-pointer group"
                  >
                    <ShoppingBag className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                    <span>{slide.btnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Puntos de navegación */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {defaultSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === selectedIndex ? 'w-10 bg-white shadow-md' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}