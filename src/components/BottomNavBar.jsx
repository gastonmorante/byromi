import React from 'react';
import { useCart } from '../context/CartContext';

export const BottomNavBar = () => {
  const { activeTab, setActiveTab, cartCount, setIsCartOpen, activeOrder } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2.5 pb-safe bg-surface-container/95 backdrop-blur-xl shadow-[0_-4px_25px_rgba(0,0,0,0.6)] border-t border-outline-variant/20 md:hidden">
      {/* Home Tab */}
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all ${
          activeTab === 'home'
            ? 'text-primary'
            : 'text-on-surface-variant/70 hover:text-on-surface'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}
        >
          home
        </span>
        <span className="font-label-sm text-[11px] font-semibold">Inicio</span>
      </button>

      {/* Menu Tab */}
      <button
        onClick={() => setActiveTab('menu')}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all ${
          activeTab === 'menu'
            ? 'text-primary'
            : 'text-on-surface-variant/70 hover:text-on-surface'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: activeTab === 'menu' ? "'FILL' 1" : "'FILL' 0" }}
        >
          restaurant_menu
        </span>
        <span className="font-label-sm text-[11px] font-semibold">Menú</span>
      </button>

      {/* Cart Tab */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col items-center justify-center py-1 px-3 rounded-full text-on-surface-variant/70 hover:text-primary transition-all"
      >
        <span className="material-symbols-outlined mb-0.5 text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>
          shopping_bag
        </span>
        <span className="font-label-sm text-[11px] font-semibold">Carrito</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-2 w-4 h-4 bg-primary text-surface-container-lowest text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-surface-container">
            {cartCount}
          </span>
        )}
      </button>

      {/* Orders / Tracking Tab */}
      <button
        onClick={() => setActiveTab('tracking')}
        className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all ${
          activeTab === 'tracking'
            ? 'text-primary'
            : 'text-on-surface-variant/70 hover:text-on-surface'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: activeTab === 'tracking' ? "'FILL' 1" : "'FILL' 0" }}
        >
          receipt_long
        </span>
        <span className="font-label-sm text-[11px] font-semibold">Rastreo</span>
        {activeOrder && activeOrder.status !== 'entregado' && (
          <span className="absolute top-1 right-3 w-2 h-2 bg-primary-container rounded-full animate-ping"></span>
        )}
      </button>
    </nav>
  );
};
