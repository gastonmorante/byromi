import React from 'react';
import { useCart } from '../context/CartContext';

export const TopAppBar = () => {
  const { cartCount, setIsCartOpen, activeTab, setActiveTab, total } = useCart();

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      '¡Hola Romi! Me encantaría consultar sobre el menú de guisados, postres artesanales y pedidos semanales.'
    );
    window.open(`https://wa.me/5212711049733?text=${text}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)] bg-surface">
      {/* Top Announcement Bar */}
      <div className="bg-secondary text-on-secondary px-margin-mobile lg:px-margin py-1.5 text-center">
        <p className="font-label-md text-label-md tracking-wide flex items-center justify-center gap-space-xs text-xs sm:text-sm">
          <span className="material-symbols-outlined text-[16px]">soup_kitchen</span>
          <span>Comida real con sazón de hogar para tu semana. Envíos en Playa del Carmen listos en 10 min.</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="h-20 bg-surface/95 backdrop-blur-md px-margin-mobile lg:px-margin border-b border-surface-container/60">
        <div className="max-w-[1360px] mx-auto h-full flex items-center justify-between gap-space-md">
          {/* Logo & Brand */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            title="Inicio - Recuerdos con Sabor by Romi"
          >
            <img
              alt="Recuerdos con Sabor By Romi"
              className="h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              src="/images/logo_by_romi.svg"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg sm:text-xl text-primary tracking-tight font-bold group-hover:text-secondary transition-colors">
                Recuerdos con Sabor
              </span>
              <span className="font-label-sm text-[10px] sm:text-[11px] text-secondary tracking-widest uppercase font-semibold">
                Cocina Casera &amp; Repostería
              </span>
            </div>
          </button>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-space-lg">
            <button
              onClick={() => scrollToSection('guisados-congelados')}
              className={`font-label-lg text-label-lg transition-colors py-space-xs ${
                activeTab === 'home' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Guisados Congelados
            </button>
            <button
              onClick={() => scrollToSection('reposteria-artesanal')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
            >
              Repostería Casera
            </button>
            <button
              onClick={() => scrollToSection('box-lunch')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
            >
              Box Lunch &amp; Juntas
            </button>
            <button
              onClick={() => scrollToSection('nuestra-cocina')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
            >
              Nuestra Cocina
            </button>
            <button
              onClick={() => scrollToSection('preguntas-frecuentes')}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
            >
              Preguntas Frecuentes
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Full Menu Button */}
            <button
              onClick={() => setActiveTab('menu')}
              className={`hidden sm:inline-flex items-center justify-center font-label-lg text-sm px-5 py-2.5 rounded-full transition-all border shadow-sm ${
                activeTab === 'menu'
                  ? 'bg-secondary text-on-secondary border-secondary font-bold'
                  : 'bg-white hover:bg-surface-container text-primary border-outline-variant/50 hover:border-secondary font-semibold'
              }`}
            >
              Ver Menú Completo
            </button>

            {/* Direct WhatsApp button */}
            <button
              onClick={handleWhatsAppContact}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#25D366] hover:text-white text-[#25D366] border border-outline-variant/40 flex items-center justify-center transition-all shadow-sm focus:outline-none"
              title="Atención directa por WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 h-10 px-3 sm:px-4 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-all active:scale-95 shadow-md focus:outline-none"
              title="Ver mi carrito"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              {cartCount > 0 ? (
                <span className="font-label-md text-xs font-bold flex items-center gap-1.5">
                  <span className="bg-secondary text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                  <span className="hidden md:inline">${total.toFixed(0)}</span>
                </span>
              ) : (
                <span className="hidden md:inline font-label-md text-xs">Carrito</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
