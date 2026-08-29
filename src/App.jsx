import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';
import { OrderTrackingView } from './components/OrderTrackingView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

const MainLayout = () => {
  const { activeTab, setActiveTab } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Fixed Top Bar */}
      <TopAppBar />

      {/* Main Content Area */}
      <main className="flex-grow pt-20 sm:pt-24 px-4 sm:px-6 md:px-8 max-w-[1180px] mx-auto w-full">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'menu' && <MenuView />}
        {activeTab === 'tracking' && <OrderTrackingView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-container bg-surface-container-lowest py-10 px-6 text-center text-xs text-on-surface-variant/70 pb-28 md:pb-12">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center p-1.5 overflow-hidden">
              <img
                src="/images/logo_romi.png"
                alt="Romi Logo"
                className="w-full h-full object-contain filter invert brightness-125"
              />
            </div>
            <div className="text-left">
              <p className="font-headline-md text-base text-primary font-semibold">
                Recuerdos con Sabor by Romi
              </p>
              <p className="text-[11px] text-on-surface-variant">
                Postres artesanales & antojitos veracruzanos • Playa del Carmen, MX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className="hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className="hover:text-primary transition-colors"
            >
              Menú & Pedidos
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className="hover:text-primary transition-colors"
            >
              Rastreo en Vivo
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/529841234567"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-[#25D366] hover:text-black flex items-center justify-center text-on-surface transition-colors"
              title="WhatsApp Romi"
            >
              <span className="material-symbols-outlined text-base">chat</span>
            </a>
            <span className="text-[11px]">© {new Date().getFullYear()} Recuerdos con Sabor. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Bottom Bar */}
      <BottomNavBar />

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
