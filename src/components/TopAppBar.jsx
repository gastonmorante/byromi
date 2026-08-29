import React from 'react';
import { useCart } from '../context/CartContext';

export const TopAppBar = () => {
  const { cartCount, setIsCartOpen, activeTab, setActiveTab, activeOrder } = useCart();

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      '¡Hola Romi! Me encantaría consultar sobre sus postres artesanales y pedidos especiales desde la app.'
    );
    window.open(`https://wa.me/529841234567?text=${text}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-16 bg-surface/90 backdrop-blur-md border-b border-surface-container transition-all">
      <div className="max-w-[1180px] mx-auto h-full px-container-padding flex items-center justify-between">
        {/* Left: Location indicator & Logo icon */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 group focus:outline-none"
            title="Inicio - Recuerdos con Sabor"
          >
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center p-1.5 overflow-hidden group-hover:border-primary transition-colors">
              <img
                src="/images/logo_romi.png"
                alt="By Romi Logo"
                className="w-full h-full object-contain filter invert contrast-125 brightness-110"
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-label-sm text-[11px] text-on-surface-variant flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
                Playa del Carmen, MX
              </span>
              <span className="font-headline-md text-xs text-primary/90 font-semibold tracking-wide">
                Atelier Repostero
              </span>
            </div>
          </button>
        </div>

        {/* Center: Brand Title */}
        <div className="flex items-center justify-center cursor-pointer" onClick={() => setActiveTab('home')}>
          <h1 className="font-headline-md text-lg sm:text-xl md:text-2xl font-semibold text-primary tracking-tight text-center">
            Recuerdos con Sabor <span className="font-body-md text-xs sm:text-sm font-normal text-on-surface-variant hidden md:inline">by Romi</span>
          </h1>
        </div>

        {/* Right: Quick actions (Order status, WhatsApp, Cart) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Tracking button badge if active order */}
          {activeOrder && (
            <button
              onClick={() => setActiveTab('tracking')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                activeTab === 'tracking'
                  ? 'bg-primary text-surface-container-lowest border-primary shadow-sm shadow-primary/30'
                  : 'bg-surface-container text-primary border-outline-variant/40 hover:bg-surface-container-high'
              }`}
              title="Ver estado de mi pedido"
            >
              <span className="material-symbols-outlined text-sm animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                two_wheeler
              </span>
              <span className="hidden md:inline">Rastreo</span>
              <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
            </button>
          )}

          {/* WhatsApp Direct Chat */}
          <button
            onClick={handleWhatsAppContact}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-variant text-primary border border-outline-variant/30 flex items-center justify-center transition-colors focus:outline-none"
            title="Chat de WhatsApp con Romi"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 rounded-full bg-primary-container text-surface-container-lowest hover:bg-primary-container/90 flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-primary-container/20 focus:outline-none"
            title="Abrir carrito de compras"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              shopping_bag
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-primary text-surface-container-lowest font-bold text-[11px] flex items-center justify-center border-2 border-surface">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
