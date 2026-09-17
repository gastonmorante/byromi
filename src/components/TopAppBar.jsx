import React from 'react';
import { useCart } from '../context/CartContext';

export const TopAppBar = () => {
  const { cartCount, setIsCartOpen, activeTab, setActiveTab, activeOrder } = useCart();

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
              className="hidden sm:inline-flex items-center justify-center font-label-lg text-label-lg text-primary-container bg-surface-container-lowest border border-tertiary-fixed-dim hover:bg-surface-container hover:text-on-surface px-space-md lg:px-space-lg py-2 rounded-full transition-all shadow-[0_2px_6px_-1px_rgba(59,39,30,0.05)]"
            >
              Ver Menú y Precios
            </button>

            {/* Tracking Button if active order */}
            {activeOrder && (
              <button
                onClick={() => setActiveTab('tracking')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold transition-all ${
                  activeTab === 'tracking'
                    ? 'bg-secondary text-on-secondary border-secondary shadow-sm'
                    : 'bg-surface-container text-secondary border-outline-variant/40 hover:bg-surface-container-high'
                }`}
                title="Rastreo de pedido"
              >
                <span className="material-symbols-outlined text-[16px] animate-pulse">two_wheeler</span>
                <span className="hidden md:inline">Rastreo</span>
              </button>
            )}

            {/* Direct WhatsApp button */}
            <button
              onClick={handleWhatsAppContact}
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-[#25D366] hover:text-white text-secondary border border-outline-variant/30 flex items-center justify-center transition-all shadow-sm focus:outline-none"
              title="WhatsApp de Romi"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative w-10 h-10 rounded-full bg-primary-container text-on-primary hover:bg-primary flex items-center justify-center transition-transform active:scale-95 shadow-md focus:outline-none"
              title="Ver mi carrito"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-secondary text-on-secondary font-bold text-[11px] flex items-center justify-center border-2 border-surface shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
