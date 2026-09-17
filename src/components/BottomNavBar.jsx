import React from 'react';
import { useCart } from '../context/CartContext';

export const BottomNavBar = () => {
  const { activeTab, setActiveTab, cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2.5 pb-safe bg-surface-container/95 backdrop-blur-xl shadow-[0_-4px_25px_rgba(0,0,0,0.6)] border-t border-outline-variant/20 md:hidden">
      {/* Home Tab */}
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center justify-center py-1 px-4 rounded-full transition-all ${
          activeTab === 'home'
            ? 'text-primary font-bold'
            : 'text-on-surface-variant/70 hover:text-on-surface'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}
        >
          home
        </span>
        <span className="font-label-sm text-[11px]">Inicio</span>
      </button>

      {/* Menu Tab */}
      <button
        onClick={() => setActiveTab('menu')}
        className={`flex flex-col items-center justify-center py-1 px-4 rounded-full transition-all ${
          activeTab === 'menu'
            ? 'text-primary font-bold'
            : 'text-on-surface-variant/70 hover:text-on-surface'
        }`}
      >
        <span
          className="material-symbols-outlined mb-0.5 text-2xl"
          style={{ fontVariationSettings: activeTab === 'menu' ? "'FILL' 1" : "'FILL' 0" }}
        >
          restaurant_menu
        </span>
        <span className="font-label-sm text-[11px]">Menú Completo</span>
      </button>

      {/* Cart Tab */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col items-center justify-center py-1 px-4 rounded-full text-secondary hover:text-primary transition-all font-semibold"
      >
        <span className="material-symbols-outlined mb-0.5 text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>
          shopping_bag
        </span>
        <span className="font-label-sm text-[11px]">Mi Pedido</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-3 w-4 h-4 bg-secondary text-white text-[10px] font-extrabold rounded-full flex items-center justify-center ring-2 ring-surface">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};
